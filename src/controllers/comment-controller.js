import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.create(
            req.query.modelId,
            req.query.modelType,
            req.user.id,
            req.body.content
        );
        return res.status(201).json({
            data: response,
            message: "Successfully created a comment",
            error: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            message: "Unable to create comment",
            error: error,
            success: false
        })
    }
}