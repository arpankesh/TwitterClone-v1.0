import { LikeRepository, TweetRepository } from "../repository/index.js";
import Tweet from "../models/tweet.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    // This is used if the user tries to like or unlike a comment/tweet.
    //The API we will be trying to hit is something like this :- localhost:3000/api/v1/likes/toggle?id=modelid&type=Tweet
    async toggleLike(modelId, modelType, userId) {
        if (modelType == "Tweet") {
            var likeable = await this.tweetRepository.find(modelId);
        } else if (modelType == "Comment") {
            // TODO
        } else {
            throw new Error("unknown Model Type in toggleLike likeRepo");
        }

        var exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId,
        })
        // We will do 2 diff operations based on whether that like exists or not
        if (exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();

            var isRemoved = true;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });

            likeable.likes.push(newLike);
            await likeable.save();

            var isRemoved = false;
        }
        return isRemoved;
    }
}

export default LikeService;