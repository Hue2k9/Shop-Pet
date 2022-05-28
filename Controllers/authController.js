const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const asyncHandle = require("../Middlewares/asyncHandle");
const crypto = require("crypto");

module.exports.login = asyncHandle(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    res.send("User not exist");
  }
  if (!(await user.isPasswordMatch(password))) {
    return res.send("Incorrect account or password");
  }
  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });
  res.redirect("http://localhost:3000/api/products");
});

module.exports.loginView = asyncHandle(async (req, res) => {
  res.render("form-login.ejs");
});

module.exports.forgotPassword = asyncHandle(async (req, res) => {
  const { email } = req.body;

  console.log(req.body);
  if (!email) return res.send("Vui long nhap email");
  const user = await User.findOne({ email });

  if (!user) return res.send("Nguoi dung khong ton tai");
  let code = await user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });
  res.send(code);
  //   res.send(`localhost:3000/api/auth/change-password?code=${code}`);
});

module.exports.changePassword = asyncHandle(async (req, res, next) => {
  const { code } = req.query;
  const user = await User.findOne({
    resetPasswordToken: code,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).send("Khong the doi password");
  }

  // Set new password
  user.password = req.body.password;
  let passwordagain = req.body.passwordagain;

  if (user.password != passwordagain)
    res.status(400).send("Mat khau phai trung khop");

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();
  res.send("change  password successfuly");
});
