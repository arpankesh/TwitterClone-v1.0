import express from "express";
import bodyParser from "body-parser";
import { connect } from "./config/database.js";
import passport from "passport";

import apiRoutes from "./routes/index.js";

import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-services.js";
import { passportAuth } from "./config/jwt-middleware.js";

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
    console.log(`Server started at PORT :- ${PORT}`);
    await connect();
    console.log("MongoDB connected");

    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);

    // const userRepo = new UserRepository();
    // const users = await userRepo.getAll();

    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, "Tweet", users[0].id);
})