const express = require("express");
const connect = require("./config/database");

const app = express();
const PORT = 3000;

const { HashtagRepository, TweetRepository } = require("./repository/index");
const TweetService = require("./services/tweet-services");

app.listen(PORT, async () => {
    console.log(`Server started at PORT :- ${PORT}`);
    await connect();
    console.log("MongoDB connected");
    const repo = new TweetService();
    const response = await repo.create({
        content: "Is my #tweet #working fine ??"
    });
    console.log("Last response", response);
})