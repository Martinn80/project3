const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const morgan = require("morgan");
const color = require("color");

require("dotenv").config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api route
app.use("/api", require("./routes/api-routes"));

// server listening at port
app.listen(PORT, () => {
    console.log("listening at http://localhost:" + PORT);
});
