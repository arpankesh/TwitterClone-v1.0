import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    //If we try to create a tweet having a new (not already in DB) hashtag more than once inside it like :-
    // "loving it #so #so #much",  the tweet and the 1st hashtag of "so" will be created
    // But, on encountering the second hashtag, an error gets thrown because title of a hashtag should be unique
    // That's why the hashtag "much" will not be created because the bulkCreate function call throws an error after the 2nd "so"
    // This can be solved by using the data structure "set" to store only unique set of tags
    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g); //this line extracts the hashtags
        tags = tags.map((tag) => tag.substring(1).toLowerCase())
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tag) => tag.title);
        let newTags = tags.filter(tag => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {
                title: tag,
                tweets: [tweet.id]
            }
        });
        await this.hashtagRepository.bulkCreate(newTags);
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save(); //no need to do asynchronously using await
        })
        return tweet;
    }
}

export default TweetService;