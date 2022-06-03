const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    firstName: { type: String, required: [true, "This field is required"] },
    lastName: { type: String, required: [true, "This field is required"] },
    email: { type: String, required: [true, "This field is required"] },
    address: { type: String, required: [true, "This field is required"] },
    message: { type: String, required: [true, "This field is required"] },
  },
  { timestamps: true }
);
module.exports = mongoose.model("contact", contactSchema);
