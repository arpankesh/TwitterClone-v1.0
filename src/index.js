const express = require("express");
const connect = require("./config/database");

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");

const app = express();
const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`Server started at PORT :- ${PORT}`);
    await connect();
    console.log("MongoDB connected");
    // const comment = await Comment.create({ content: "First comment from me" });
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({
        content: "6th Tweet it is !!!",
        userEmail: "x@y1234.com",
        // comments: comment
    })
    console.log(tweet);
    // const tweets = await Tweet.find({ userEmail: "a@b.com" });
    // const tweet = await Tweet.findById("63cccec9fbbcade18d1daf82");
    // tweet.userEmail = "b@c.com";
    // await tweet.save();
    // const tweet = await tweetRepo.getWithComments("63cd5a511a1e616896f753fc");
    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.getAll(1, 4);
    // console.log(tweet[0].contentWithEmail);
})