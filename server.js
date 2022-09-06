/*
  - Lab 2.12: Trả lại trang 404
Tương tự như trên áp dụng cho trang 404 ở app.js.
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
