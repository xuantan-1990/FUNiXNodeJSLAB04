const Product = require("../models/products");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    formsCss: true,
    productCss: true,
    activeAddProducts: true,
  });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll();
  res.render("shop", {
    products,
    docTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCss: true,
  });
};
