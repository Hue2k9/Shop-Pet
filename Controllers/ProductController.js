const Product = require("../Models/Product");
const asyncHandle = require("../Middlewares/asyncHandle");
const jwt = require("jsonwebtoken");

const addProduct = asyncHandle(async (req, res) => {
  await Product.create(req.body);
  res.redirect("/api/products");
});

const addProductView = asyncHandle(async (req, res) => {
  let token;
  token = req.cookies.token;
  const user = jwt.verify(token, process.env.SECRET_KEY);
  res.render("addProducts.ejs", { user: user });
});

const getAllProduct = asyncHandle(async (req, res) => {
  let products = await Product.find();
  let token;
  token = req.cookies.token;
  const user = jwt.verify(token, process.env.SECRET_KEY);
  res.render("index.ejs", { user, products });
});

const getAllProductJson = asyncHandle(async (req, res) => {
  let products = await Product.find();
  let token;
  token = req.cookies.token;
  const user = jwt.verify(token, process.env.SECRET_KEY);
  res.json(products);
});

const getProductById = asyncHandle(async (req, res) => {
  let { id } = req.params;
  let product = await Product.findById(id);
  let token;
  token = req.cookies.token;
  console.log(product);
  const user = jwt.verify(token, process.env.SECRET_KEY);
  res.render("detail-product.ejs", { user: user, product: product });
});

const deleteProduct = asyncHandle(async (req, res) => {
  let { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.send("Delete successful!");
});

const updateProduct = asyncHandle(async (req, res) => {
  let { id } = req.params;
  let product = await Product.findByIdAndUpdate(id, req.body);
  res.send("Update successful");
});

//delete,edit product
const ProductView = asyncHandle(async (req, res) => {
  const products = await Product.find({});
  res.render("Product_admin.ejs", { products: products });
});

module.exports = {
  addProductView,
  addProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
  getProductById,
  ProductView,
  getAllProductJson,
};
