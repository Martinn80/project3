const express = require("express");
const router = express.Router();
const Video = require("../model/Video");

router.get("/api/all", (req, res) => {
    Video.find({})
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err));
});

router.post("/api/new", (req, res) => {
    Video.create({
        videoId: req.body.videoId,
        videoImg: req.body.videoImg
    })
        .then(result => res.send(result))
        .catch(err => console.log(err));
});

// router.post('/', (req, res) => {});

module.exports = router;
