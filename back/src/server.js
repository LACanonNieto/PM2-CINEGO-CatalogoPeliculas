const express = require("express");
const router = require("./routes");

const app = express();  ///app o server el nombre

app.use(router);

module.exports = app;