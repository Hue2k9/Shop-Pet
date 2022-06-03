const express = require("express");
const transactionController = require("../Controllers/transactionController");
const transactionRouter = express.Router();

transactionRouter.route("/buying/:id").post(transactionController.buying);
transactionRouter.route("/cart").get(transactionController.addCartView);
module.exports = transactionRouter;
