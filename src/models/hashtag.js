import mongoose from "mongoose";

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tweet"
        }
    ]
}, { timestamps: true });

// Implementing Hooks to store all hashtags in lowercase only
// hashtagSchema.pre("save", function (next) {
//     this.title = this.title.toLowerCase();
//     next();
// })

const Hashtag = mongoose.model("Hashtag", hashtagSchema);
export default Hashtag;