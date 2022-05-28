const crypto = require("crypto");
const jwt = require("jsonwebtoken");
/**
 * Register with username and password
 * @param {string} username
 * @param {string} password
 * @param {string} email
 * @param {string} passwordagain
 * @returns {Promise<User>}
 */
const register = async (username, password, email, passwordagain) => {
  let checkUserName = await User.findOne({
    username: username,
  });
  if (!checkUserName) {
    const checkEmail = await User.findOne({
      email: email,
      verifyEmail: true,
    });

    if (checkEmail) {
      throw new appError("Email này đã được đăng ký");
    }
    if (password === passwordagain) {
      const emailToken = tokenService.createEmailToken((type = "register"));
      let user = new User({ username, password, email, emailToken });
      return user.save();
    } else {
      throw new Error("Mật khẩu không trùng khớp");
    }
  } else throw new appError("Tài khoản đã tồn tại");
};
module.exports = {
  register,
};
