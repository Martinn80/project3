const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("<h1>Welcome to Back End</h1>");
});

// router.post('/', (req, res) => {});

module.exports = router;
