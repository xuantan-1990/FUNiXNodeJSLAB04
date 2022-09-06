/*
  - Lab 2.10: Tạo trang HTML
Tạo 2 trang HTML giống nhau phần menu. Trang add-product.html là form submit sản phẩm (bao gồm thông tin title) và shop.html là danh sách sản phẩm.
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
