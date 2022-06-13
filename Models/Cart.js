const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    product: { type: Schema.Types.ObjectId, ref: "product" },
    quantity: Number,
    price: Number,
  },
  { timestamps: true }
);
module.exports = mongoose.model("cart", cartSchema);
