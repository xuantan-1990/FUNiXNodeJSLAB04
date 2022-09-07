/*
  - Lab 3.8: Thêm bố cục vào Handlebars
*/

const express = require("express");
const appServer = express();
const adminData = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");
const expressHbs = require("express-handlebars");

appServer.engine("hbs", expressHbs({layoutDir:'views/layouts/', defaultLayout:'main-layout',extname:'hbs'}));
appServer.set("view engine", "hbs");
appServer.set("views", "views");

appServer.use(express.urlencoded({ extended: true }));
appServer.use(express.static(path.join(__dirname, "public")));

appServer.use("/admin", adminData.routes);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).render('404',{docTitle:'Page Not Found'});
});

appServer.listen(3000);
