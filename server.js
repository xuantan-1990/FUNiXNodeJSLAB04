/*
  - Lab 3.4: Chuyển đổi tệp HTML sang Pug
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
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

appServer.listen(3000);
