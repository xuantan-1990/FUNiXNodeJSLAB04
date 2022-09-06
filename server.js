/*
  - Lab 2.5: Phân tích cú pháp Requests đến
Ở trang http://localhost:3000/add-product trả về một trang HTML với nội dung là 1 form dùng để post sản phẩm (bao gồm thông tin về title) tới http://localhost:3000/product.
Tạo middleware ứng với http://localhost:3000/product nhận post request đến và log ra console req.body

  - Lab 2.6: Giới hạn việc thực thi Middleware đối với Post Requests
Thay đổi middleware ứng với http://localhost:3000/product để chỉ nhận post request
*/

const express = require("express");
const appServer = express();

appServer.use(express.urlencoded({ extended: false }));

appServer.use("/add-product", (req, res, next) => {
  console.log("First Middleware");
  res.send(
    "<form action='/product' method= 'POST'><input type='text' name='title'><button type='submit'>Send</button></form>"
  );
});

//Lab 2.5: sử dụng appServer.use
appServer.post("/product", (req, res, next) => {
  console.log("Second Middleware");
  console.log(req.body);
  res.redirect("/");
});

appServer.use("/", (req, res, next) => {
  console.log("Third Middleware");
  res.send("<h1>Hello from Express.js</h1>");
});

appServer.listen(3000);
