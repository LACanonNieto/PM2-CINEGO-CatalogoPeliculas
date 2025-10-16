const express = require("express");
const moviesRouter = require("./routes/moviesRouter");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use(moviesRouter);

module.exports = app;