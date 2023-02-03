import TweetService from "../services/tweet-services.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data: response,
            message: "Successfully created a tweet",
            error: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Unable to create tweet",
            error: error,
            success: false
        })
    }
}

export const getTweet = async (req, res) => {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            data: response,
            message: "Successfully fetched a tweet",
            error: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Unable to fetch a tweet",
            error: error,
            success: false
        })
    }
}