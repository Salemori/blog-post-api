const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
   type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
    },
    body: {
        type: String,
        required: true
    },
    published: {
        type: Boolean,
        required: false
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;