const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    productname: {
      type: String,
      required: [true, "This field is required"],
    },
    price: {
      type: Number,
      required: [true, "This field is required"],
    },
    quantity: {
      type: Number,
    },
    origin: String,
    description: {
      type: String,
      required: [true, "This field is required"],
    },
    image: {
      type: String,
      default: "default.jpg",
      required: [true, "This field is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", productSchema);
