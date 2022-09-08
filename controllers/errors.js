//sử dụng controllers cần phải có thuộc tính path

exports.getNotFoundError = (req, res) => {
  res.status(404).render("404", { docTitle: "Page Not Found", path: "" });
};
