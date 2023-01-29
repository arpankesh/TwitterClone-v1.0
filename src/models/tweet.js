const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userEmail: {
        type: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
}, {
    timestamps: true
});

tweetSchema.virtual("contentWithEmail").get(function process() {
    return (this.content + "\n" + "Created By " + this.userEmail);
});

tweetSchema.pre("save", function (next) {
    // this.content = this.content + "...........";
    console.log("Inside Hooks");
    setTimeout(() => {
        next();
    }, 5000);
});

tweetSchema.pre("save", function (next) {
    console.log("Inside 2nd Hook");
    next();
})

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
// console.log("Printing after next()");