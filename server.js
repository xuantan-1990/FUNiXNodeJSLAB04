/*
  - Lab 4.2: Hoàn thiện Controller
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");
const notFoundError = require('./controllers/errors');

appServer.set("view engine", "ejs");
appServer.set("views", "views");

appServer.use(express.urlencoded({ extended: true }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);
appServer.use(notFoundError.getNotFoundError);

appServer.listen(3000);
