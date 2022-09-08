const express = require("express");
const router = express.Router();

// khi sử dụng controller ko còn cần path và rootDir
// const path = require("path");
// const rootDir = require('../util/path');

const productsControllers = require('../controllers/products')


router.get("/add-product", productsControllers.getAddProduct);

router.post("/add-product", productsControllers.postProduct);

// khi sử dụng controller ko còn cần xuất ra từng phần nữa
// exports.routes = router;
// exports.products = products;
module.exports = router;