import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    onModel: {
        type: String,
        required: true,
        enum: ["Tweet", "Commment"]
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "onModel"
    }
}, {
    timestamps: true
})

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;  //Since there's only one export, we can use default
// could have done :- export Comment too
