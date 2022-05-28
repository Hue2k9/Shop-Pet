const userRouter = require("./userRoutes");
const productRouter = require("./productRoutes");
const authRouter = require("./authRoutes");
const transactionRouter = require("./transactionRoutes");
module.exports = (app) => {
  app.use("/api/users", userRouter);
  app.use("/api/products", productRouter);
  app.use("/api/auth", authRouter);
  app.use("/api/transaction", transactionRouter);
};
