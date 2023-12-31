"use strict";

// 모듈
const express = require("express");
const body_parser = require("body-parser")
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views"); 
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));

// 미들웨어 세팅
app.use("/", home);

module.exports = app;