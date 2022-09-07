/*
  - Lab 3.7: Chuyển đổi ứng dụng sang Handlebars
*/

const express = require("express");
const appServer = express();
const adminData = require("./routers/admin");
const routerShop = require("./routers/shop");
const path = require("path");
const expressHbs = require("express-handlebars");

appServer.engine("hbs", expressHbs());
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
