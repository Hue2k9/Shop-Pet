const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: String,
    name: String,
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    username: {
      type: String,
      required: [true, "This field is required"],
      unique: true,
    },
    name: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phonenumber: {
      type: Number,
      match: [/^(^\+251|^251|^0)?9\d{8}$/, "Please add a valid phone number"],
    },

    photo: {
      type: String,
      default: "default.jpg",
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "This field is required"],
    },
    password: String,
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    code: String,
    verifyEmail: {
      type: Boolean,
      default: false,
    },
    emailToken: {
      type: String,
    },
    emailExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  // console.log(this);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sh256", process.env.JWT_SECRET)
    .update(resetToken)
    .digest("hex");

  this.resetPasswordExpire = Date.now() + process.env.RESET_TOKEN_EXPIRE * 60;
  return this.resetPasswordToken;
};

userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign(
    { id: this._id },
    (process.env.JWT_SECRET = {
      expiresIn: process.env.RESET_TOKEN_EXPIRE,
    })
  );
};

module.exports = mongoose.model("users", userSchema);
