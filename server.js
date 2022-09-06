/*
  - Lab 2.2: Cài đặt Middleware
Đăng ký 2 middleware và in ra console log ở mỗi middleware, gọi hàm next để cả 2 dòng console log đều được in ra.
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
});

const server = http.createServer(appServer);

server.listen(3000);
