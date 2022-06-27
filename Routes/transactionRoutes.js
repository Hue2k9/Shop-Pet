const express = require("express");
const transactionController = require("../Controllers/transactionController");
const transactionRouter = express.Router();

transactionRouter.route("/buying/:id").post(transactionController.buying);
transactionRouter.route("/cart").get(transactionController.addCartView);
transactionRouter.route("/order").get(transactionController.Order);
module.exports = transactionRouter;
