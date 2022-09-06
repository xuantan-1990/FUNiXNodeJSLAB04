/*
  - Lab 2.7: Sử dụng Express Router
Cài đặt Express Router và chuyển các xử lý ở app.js về các file Router tương ứng.
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");

appServer.use(express.urlencoded({ extended: false }));

appServer.use(routerAdmin);
appServer.use(routerShop);

appServer.listen(3000);
