const Product = require("../Models/Product");
const asyncHandle = require("../Middlewares/asyncHandle");
const jwt = require("jsonwebtoken");
//api/transaction/buying/:id
const buying = asyncHandle(async (req, res) => {
  let { id } = req.params;
  let { quantity } = req.body;
  let productOld = await Product.findById(id);
  if (productOld.quantity < quantity) res.send("So luong khong du");
  else {
    let quantity1 = productOld.quantity - quantity;
    console.log(quantity);
    let productNew = await Product.findByIdAndUpdate(id, {
      quantity: quantity1,
    });
    res.send("Mua hang thanh cong");
  }
});

const Order = asyncHandle(async (req, res) => {
  let { name, phoneNumber, Address } = req.body;
  let sp = localStorage.getItem("cart");
  let hang = JSON.parse(sp);
  let show = hang;
  console.log(show);
  res.json(show);
});

const addCartView = asyncHandle(async (req, res) => {
  let token;
  token = req.cookies.token;
  const user = jwt.verify(token, process.env.SECRET_KEY);
  res.render("product-cart", { user: user });
});

//api/transaction/cart
const addCart = asyncHandle(async (req, res) => {
  res.send("Add cart successfully!");
});

module.exports = {
  buying,
  addCartView,
  addCart,
  Order,
};
