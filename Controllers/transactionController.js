const Product = require("../Models/Product");
const asyncHandle = require("../Middlewares/asyncHandle");

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

const addCartView = asyncHandle(async (req, res) => {
  res.render("product-cart.ejs");
});

//api/transaction/cart
const addCart = asyncHandle(async (req, res) => {
  res.send("Add cart successfully!");
});

module.exports = {
  buying,
  addCartView,
  addCart,
};
