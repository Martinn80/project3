const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    title: {
        type: String
    },
    views: {
        type: Number
    },
    publishedAt: {
        type: Date
    }
});

module.exports = Video = mongoose.model("Video", videoSchema);
