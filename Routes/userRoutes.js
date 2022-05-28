const express = require("express");
const userController = require("../Controllers/UserController");
const userRouter = express.Router();
userRouter.route("/").get(userController.getAllUsers);
userRouter
  .route("/sign-up")
  .post(userController.addUser)
  .get(userController.addUserView);

userRouter
  .route("/:id")
  .post(userController.updateUser)
  .get(userController.getUserById)
  .delete(userController.deleteUser);

module.exports = userRouter;
