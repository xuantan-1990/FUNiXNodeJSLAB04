/*
  - Lab 3.5: Thêm bố cục
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
  res.status(404).render('404',{docTitle:'Page Not Found'});
});

appServer.listen(3000);
