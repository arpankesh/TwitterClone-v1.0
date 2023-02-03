import LikeService from "../services/like-services.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        return res.status(201).json({
            data: response,
            success: true,
            message: "Successfully toggled like",
            error: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Something went wrong in like-controller",
            error: error
        })
    }
}
