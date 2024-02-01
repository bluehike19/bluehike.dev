const mongoose = require("mongoose")

const CommentSchema = new mongoose.Schema({
    comments: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        required: true,
    },
    postId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    }
}, {timestamps: true})

module.exports = mongoose.model('Comment', CommentSchema)