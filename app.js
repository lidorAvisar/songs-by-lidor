const express = require("express");
const http = require("http");
const path = require("path");

const {routesInit} = require("./routes/configRoutes")

const app = express();
// מאפשר לשלוח באדי דרך הצד לקוח
app.use(express.json());

// להגדיר תיקייה סטטית שתיהיה התיקייה בשם פאבליק
app.use(express.static(path.join(__dirname,"public")));

routesInit(app);


const server = http.createServer(app);
const port = process.env.PORT || 3003
server.listen(port);
console.log('express work!');