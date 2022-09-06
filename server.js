/*
  - Lab 2.14: Cung cấp tệp tĩnh
 Dẫn link tương đối các file css bằng cách đưa vào folder public/css.
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");

appServer.use(express.urlencoded({ extended: false }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

appServer.listen(3000);
