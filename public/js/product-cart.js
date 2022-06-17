// document.getElementById("del").style.display = "none";

// function delProductCart() {
//   var cartItem = document.querySelectorAll(".mycart-left-body-items");
//   for (var i = 0; i < cartItem.length; i++) {
//     var del = document.querySelector(".icon");
//     del[i].addEventListener("click", (e) => {
//       var delCart = e.target;
//       console.log(delCart);
//     });
//   }
// }
// delProductCart();
// function delItem(x) {
//   var delCart = x.parentElement.parentElement;
//   delCart.remove();
// }

function showcart() {
  let sp = localStorage.getItem("cart");
  let hang = JSON.parse(sp);

  let show = hang;
  console.log(show);
  let tong = 0;
  let text = "";
  let addProduct;
  for (let i in show) {
    tong += Number(show[i][2]) * 1000;
    text += `<li class="mycart-left-body-items">
    <div class="close item1">
        <div class="icon">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="img">
            <img src="${show[i][0]}" alt="">
        </div>
        <div class="title">
            <a href="">${show[i][1]}</a>
        </div>
    </div>
    <div class="item2">
        <span>${show[i][2]} VNĐ</span>
    </div>
    <div class="item3">
        <input type="number" min="0" max="10" value="1">
    </div>
    <div class="item4">
        <span>${show[i][2]} đ<span>
    </div>
</li>`;
    addProduct = document.createElement("li");
    var productList = document.querySelector("#showcart");
  }
  addProduct.innerHTML = text;
  productList.appendChild(addProduct);
  // document.getElementById("demsl").innerHTML = hang.length;
  // document.getElementById("kq").innerHTML = tong.toLocaleString("de-DE");
}
showcart();
