const express = require("express");
const productController = require("../Controllers/ProductController");
const { authenticateToken } = require("../Middlewares/authMiddleware");

const productRouter = express.Router();

productRouter
  .route("/")
  .post(productController.addProduct)
  .get(productController.getAllProduct);

productRouter
  .route("/:id")
  .get(productController.getProductById)
  .put(authenticateToken, productController.updateProduct) //chua giao dich, admin
  .delete(authenticateToken, productController.deleteProduct); //admin

module.exports = productRouter;
