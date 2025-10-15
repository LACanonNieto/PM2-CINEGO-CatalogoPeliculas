const express = require("express");
const moviesRouter = require("./routes/moviesRouter");

const app = express();

app.use(moviesRouter);

module.exports = app;