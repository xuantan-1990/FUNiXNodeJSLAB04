/*
  - Lab 4.4: Lưu trữ dữ liệu trong tệp thông qua model
*/

const express = require("express");


const path = require("path");
const notFoundError = require('./controllers/errors');
const appServer = express();

appServer.set("view engine", "ejs");
appServer.set("views", "views");

const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");

appServer.use(express.urlencoded({ extended: false }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);

appServer.use(notFoundError.getNotFoundError);

appServer.listen(3000);
