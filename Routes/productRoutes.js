const express = require("express");
const productController = require("../Controllers/ProductController");
const { authenticateToken } = require("../Middlewares/authMiddleware");
const upload = require("../Middlewares/upload");
const productRouter = express.Router();

productRouter
  .route("/")
  .get(authenticateToken, productController.getAllProduct);
productRouter.route("/json").get(productController.getAllProductJson);

productRouter
  .route("/check_all")
  .get(authenticateToken, productController.ProductView);

productRouter
  .route("/add")
  .get(productController.addProductView)
  .post(
    upload.uploadPostImage,
    upload.resizePostPhoto,
    productController.addProduct
  );

productRouter
  .route("/edit/:id")
  .get(productController.editProductView)
  .put(productController.updateProduct);

productRouter
  .route("/:id")
  .get(productController.getProductById)
  .delete(authenticateToken, productController.deleteProduct);

module.exports = productRouter;
