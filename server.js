/*
  - Lab 2.11: Cung cấp các trang HTML
Sử dụng path để lấy đường dẫn file html và trả về client (thay về trả trực tiếp từ string)
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");

appServer.use(express.urlencoded({ extended: false }));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

appServer.listen(3000);
