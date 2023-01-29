const express = require("express");
const connect = require("./config/database");

const TweetRepository = require("./repository/tweet-repository");
const Comment = require("./models/comment");
const Tweet = require("./models/tweet");

const app = express();
const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`Server started at PORT :- ${PORT}`);
    await connect();
    console.log("MongoDB connected");

    const tweets = await Tweet.find({
        content: ["1st Tweet it is !!!", "2nd Tweet it is !!!"]
    })
    console.log(tweets);
})