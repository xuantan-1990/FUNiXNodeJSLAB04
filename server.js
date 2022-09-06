/*
  - Lab 2.13: Sử dụng chức năng trợ giúp để điều hướng
Tạo object hỗ trợ lấy path ngắn gọn hơn.
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");

appServer.use(express.urlencoded({ extended: false }));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

appServer.listen(3000);
