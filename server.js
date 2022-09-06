/*
  - Lab 2.8: Thêm trang xử lý lỗi 404
Thêm middleware ở app.js và bắt những đường dẫn mà chưa được định nghĩa rồi trả về một trang với nội dung: "Page not found".
*/

const express = require("express");
const appServer = express();
const routerAdmin = require("./routers/admin");
const routerShop = require("./routers/shop");

appServer.use(express.urlencoded({ extended: false }));

appServer.use(routerAdmin);
appServer.use(routerShop);
appServer.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

appServer.listen(3000);
