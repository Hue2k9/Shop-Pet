const Product = require("../Models/Product");
const asyncHandle = require("../Middlewares/asyncHandle");

const addProduct = asyncHandle(async (req, res) => {
  await Product.create(req.body);
  res.send("Add product successfully!");
});

const getAllProduct = asyncHandle(async (req, res) => {
  let products = await Product.find();
  // res.json(products);
  res.render("index.ejs");
});

const getProductById = asyncHandle(async (req, res) => {
  let { id } = req.params;
  let product = await Product.findById(id);
  res.json(product);
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

module.exports = {
  addProduct,
  getAllProduct,
  deleteProduct,
  updateProduct,
  getProductById,
};
