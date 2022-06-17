const mongoose = require("mongoose");
const { STRING } = require("sequelize");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    name: {
      type: STRING,
      required: ["Tên là bắt buộc"],
    },
    phoneNumber: {
      type: Number,
      required: ["Số điện thoại là bắt buộc"],
    },
    Address: {
      type: String,
      required: ["Địa chỉ là bắt buộc"],
    },
    Product: {
      name: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: Number,
    },
    quantity: Number,
    price: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("order", orderSchema);
