document.getElementById("del").style.display = "none";

function delProductCart() {
  var cartItem = document.querySelectorAll(".mycart-left-body-items");
  for (var i = 0; i < cartItem.length; i++) {
    var del = document.querySelector(".icon");
    del[i].addEventListener("click", (e) => {
      var delCart = e.target;
      console.log(delCart);
    });
  }
}
delProductCart();
function delItem(x) {
  var delCart = x.parentElement.parentElement;
  delCart.remove();
}

function CartInfo() {}
