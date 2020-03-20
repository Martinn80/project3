const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    videoId: {
        type: String,
        required: true
    },
    videoImg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Video = mongoose.model("Video", videoSchema);
