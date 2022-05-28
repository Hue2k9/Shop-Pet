const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");
const emailServices = require("../Services/emaiService");
const appError = require("../utils/appError");

//api/users
const addUser = asyncHandle(async (req, res) => {
  let { username, password, passwordagain, email } = req.body;
  let check = await User.findOne({ username: username });

  if (!check) {
    if (password === passwordagain) {
      await User.create(req.body);
      res.send("Dang ky thanh cong");
    } else {
      throw new Error("Mật khẩu không trùng khớp");
    }
  } else throw new appError("Tài khoản đã tồn tại");
});

const addUserView = asyncHandle(async (req, res) => {
  res.render("form-signup.ejs");
});

//api/users/:id
const updateUser = asyncHandle(async (req, res) => {
  let { id } = req.params;
  let user = await User.findByIdAndUpdate(id, req.body);
  res.send("Cap nhat thanh cong");
});

//api/users
const getAllUsers = asyncHandle(async (req, res) => {
  let users = await User.find();
  res.json(users);
});

//api/users/:id
const getUserById = asyncHandle(async (req, res) => {
  let { id } = req.params;
  let user = await User.findById(id);
  res.json(user);
});

const deleteUser = asyncHandle(async (req, res) => {
  let { id } = req.params;
  await User.findByIdAndDelete(id);
  res.send("Delete successful!");
});

module.exports = {
  addUser,
  updateUser,
  getAllUsers,
  getUserById,
  addUserView,
  deleteUser,
};
