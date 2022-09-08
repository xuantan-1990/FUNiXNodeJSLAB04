/*
  - Lab 4.1: Thêm Controller
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");

appServer.set("view engine", "ejs");
appServer.set("views", "views");

appServer.use(express.urlencoded({ extended: true }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).render('404',{docTitle:'Page Not Found'});
});

appServer.listen(3000);
