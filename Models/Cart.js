const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    user: String,
    quantity: Number,
    product: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", userSchema);
