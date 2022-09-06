/*
  - Lab 3.1: Chia sẻ dữ liệu giữa các Requests, User
Tạo object products và chia sẻ giữa trang admin, shop.
*/

const express = require("express");
const appServer = express();
const adminData = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");

appServer.use(express.urlencoded({ extended: false }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", adminData.routes);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

appServer.listen(3000);
