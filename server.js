/*
  - Lab 2.9: Phân luồng đường dẫn
cài đặt sao cho Route admin.js sẽ được nối thêm thành http://localhost:3000/admin/.... thay vì http://localhost:3000/....
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");

appServer.use(express.urlencoded({ extended: false }));

appServer.use("/admin", routerAdmin);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

appServer.listen(3000);
