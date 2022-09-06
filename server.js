/*
  - Lab 2.3: Cách thức hoạt động của Middleware
Ở middleware thứ 2 trả về một đoạn code HTML với nội dung: Hello from Express.js
*/

const http = require("http");
const express = require("express");
const appServer = express();

appServer.use((req, res, next) => {
  console.log("First Middleware");
  next();
});

appServer.use((req, res, next) => {
  console.log("Second Middleware");
  res.send("<h1>Hello from Express.js</h1>");
  console.log("Hello from Express.js");
});

const server = http.createServer(appServer);

server.listen(3000);
