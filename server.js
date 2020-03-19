const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const morgan = require("morgan");
const chalk = require("chalk");

require("dotenv").config();

// MongoDB connection
mongoose
    .connect(process.env.mongoDB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(chalk.bgCyan.black("Connected to MongoDB"));
        console.log(chalk.green("**************************************"));
    })
    .catch(err => status(200).send(err));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client"));

// api route
app.use("/", require("./routes/api-routes"));

// server listening at port
app.listen(PORT, () => {
    console.log(chalk.green("**************************************"));
    console.log(chalk.bgCyan.black("listening at http://localhost:" + PORT));
});
