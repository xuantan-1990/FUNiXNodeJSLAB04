/*
  - Lab 3.2: Cài đặt & triển khai Pug
Cài đặt Pug template engine và tạo file shop.pug, chuyển đổi code từ file shop.html qua. Cấu hình để ứng dụng hoạt động với shop.pug.
*/

const express = require("express");
const appServer = express();
const adminData = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");

appServer.set('view engine', 'pug');
appServer.set("views", "views");

appServer.use(express.urlencoded({ extended: true }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", adminData.routes);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

appServer.listen(3000);
