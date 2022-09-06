/*
  - Lab 2.4: Xử lý các Route khác nhau
Tạo 3 middleware:
    + 1 cái luôn chạy.
    + 1 cái ứng với http://localhost:3000/add-product trả về một trang HTML với nội dung: "The Add product page".
    + 1 cái ứng với http://localhost:3000 trả về một trang HTML với nội dung: "Hello from Express.js".
*/

const http = require("http");
const express = require("express");
const appServer = express();

appServer.use("/", (req, res, next) => {
  console.log("This always run");
  next();
});

appServer.use("/add-product", (req, res, next) => {
  console.log("Add product Middleware");
  res.send("<h1>The Add product page</h1>");
  next();
});

appServer.use("/", (req, res, next) => {
  console.log("Third Middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

const server = http.createServer(appServer);

server.listen(3000);
