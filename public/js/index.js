//-----------------------------------cart------------------------
var cart = new Array();
const btn = document.querySelectorAll(".product-right-item-btn");
btn.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    var btnItem = e.target;
    var productItem = btnItem.parentElement;
    var productImg = productItem.querySelector(".product-right-item-avt").src;
    var productTitle = productItem.querySelector(
      ".product-right-title"
    ).innerText;
    var productCost = productItem.querySelector(
      ".product-right-item-cost"
    ).innerText;
    addCart(productTitle, productCost, productImg);
    //  addCartPay()
    DeleteProduct();
    var sp = new Array(productImg, productTitle, productCost);
    cart.push(sp);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart.length);
    handlePrice();
  });
});

function addCart(productTitle, productCost, productImg) {
  var productList = document.querySelector(".cart-product-list");
  var addProduct = document.createElement("li");
  var productContent =
    '<li class="cart-product-items"><img src="' +
    productImg +
    '" alt=""><div class="product-content"><p>' +
    productTitle +
    '</p><span class="product-cost">' +
    productCost +
    '</span><span class="product-VND">đ</span></div><div class="delete-product"><i class="fa-solid fa-xmark"></i></div></li>';
  addProduct.innerHTML = productContent;
  productList.appendChild(addProduct);
  handlePrice();
}

// function addCartPay() {
//     var productPay = document.createElement('div')
//     var productPayParent =  document.querySelector('.cart-product')
//     var productPayContent = '<div class="cart-bottom"><div class="view-cart ">Xem giỏ hàng</div><div class="payment ">Thanh toán</div></div>'
//     productPay.innerHTML = productPayContent
//     productPayParent.appendChild(productPay)
// }

function DeleteProduct() {
  var cartItem = document.querySelectorAll(".cart-product-items");
  for (var i = 0; i < cartItem.length; i++) {
    var del = document.querySelectorAll(".delete-product");
    del[i].addEventListener("click", (e) => {
      var delCart = e.target;
      var delCartParent = delCart.parentElement.parentElement;
      delCartParent.remove();
    });
  }
}
function handlePrice() {
  //     var t=0;
  //     var cartItem = document.querySelectorAll('.cart-product-items')
  //     for (var i = 0; i < cartItem.length; i++){
  //         var priceProduct=cartItem[i].querySelector('.product-cost').innerText;

  //          t+=Number(priceProduct)*1000
  //     }
  //    var outPrice = document.querySelector('.header-bottom-cart-price')
  //    outPrice.innerHTML = t.toLocaleString('de-DE')
  document.getElementById("count-sp").innerHTML = cart.length;
}

//----------------------------product-cart------------------------------------------------------------------
// var returnHomePage = document.querySelector('.return-home-page');
// returnHomePage.addEventListener('click', () => {
//     window.location.assign('index.html')
// })

var deltailArr = new Array();
function clickProduct(x) {
  location.assign("detail-product.ejs");
  var boxsp = x.parentElement.children;
  var img = boxsp[0].src;
  var title = boxsp[1].innerText;
  var cost = boxsp[2].children[0].innerText;
  // console.log(img, title, cost)
  var deltail = new Array(img, title, cost);
  deltailArr.push(deltail);
  sessionStorage.setItem("deltailArr", JSON.stringify(deltailArr));
}

// function showDaltail() {
//     var gh = JSON.parse(sessionStorage.getItem('deltailArr'))
//     for (var i = 0; i < gh.length; i++) {
//         var show =
//         '<div class="wraper">'+
//         '<div class="mycart-left mycart-dentail-left">'+
//             '<img src="'+gh[i][0]+'" alt="">'+
//             '<div class="product-info">'+
//                 '<h2>'+gh[i][2]+'</h2>'+
//                 '<span>'+gh[i][1]+' đ</span>'+
//                 '<div class="promotion">'+
//                  '<h3>Ưu đãi</h3>'+
//                      '<ul class="promotion-list">'+
//                          '<li class="promotion-item">'+
//                              '<i class="fa-solid fa-gift"></i>'+
//                              '<p>Miễn phí vận chuyển đơn hàng dưới 100k</p>'+
//                          '</li>'+
//                          '<li class="promotion-item">'+
//                              '<i class="fa-solid fa-gift"></i>'+
//                              '<p>Giftcard lên đến 50k</p>'+
//                          '</li>'+
//                          '<li class="promotion-item">'+
//                              '<i class="fa-solid fa-gift"></i>'+
//                              '<p>Phiếu mua hàng trị giá 100k</p>'+
//                          '</li>'+
//                      '</ul>'+
//                 '</div>'+
//                 '<div class="bought-it">'+
//                     '<h4>Mua hàng tại đây</h4>'+
//                     '<div class="bought-it-here">'+
//                         '<input style="height: 40px; width: 50px; font-size: 20px; padding: 5px;"  value="1" type="number">'+
//                         '<button class="btn">Thêm vào giỏ hàng</button>'+
//                     '</div>'+
//                 '</div>'+
//             '</div>'+
//            '</div>'+
//        '</div>'
//     }
//     document.getElementById('deltail').innerHTML = show;
// }

function intoCart() {
  location.assign("product-cart.html");
}
function showcart() {
  var sp = sessionStorage.getItem("cart");
  var hang = JSON.parse(sp);
  var show = "";
  var tong = 0;
  for (var i = 0; i < hang.length; i++) {
    tong += Number(hang[i][2]) * 1000;
    show +=
      '<li class="mycart-left-body-items">' +
      '<div class="close item1">' +
      '<div onclick="delItem(this)" class="icon">' +
      '<i class="fa-solid fa-xmark"></i>' +
      "</div>" +
      '<div class="img">' +
      '<img src="' +
      hang[i][0] +
      '" alt="">' +
      "</div>" +
      '<div class="title">' +
      "<p>" +
      hang[i][1] +
      "</p>" +
      "</div>" +
      "</div>" +
      '<div class="item2">' +
      '<span class="cost">' +
      hang[i][2] +
      " </span> <sup> đ</sup>" +
      "</div>" +
      '<div class="item3">' +
      '<input id="sl" type="number" min="0" max="10" value="1">' +
      "</div>" +
      '<div class="item4">' +
      '<span id="count">' +
      hang[i][2] +
      "</span> " +
      "</div>" +
      "</li>";
  }
  show +=
    '<div class="update-cart"><div style="display:flex;"><h3>Tổng chi: </h3> <span style="transform: translateY(2.5px); margin-left: 10px;" id="kq"> 0 </span> đ</div> <br/>' +
    '<button onclick="handleCart()" class="btn">Cập nhật lại giỏ hang</button> </div>';
  document.getElementById("showcart").innerHTML = show;
  document.getElementById("demsl").innerHTML = hang.length;
  document.getElementById("kq").innerHTML = tong.toLocaleString("de-DE");
}

showcart();

function handlecost() {
  var cartItem = document.querySelectorAll(".mycart-left-body-items");
  var tong = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var cost = cartItem[i].querySelector(".cost").innerHTML;
    var sl = cartItem[i].querySelector("#sl").value;
    var countT = cartItem[i].querySelector("#count");
    console.log(countT);
    var t = Number(cost) * sl * 1000;
    countT.innerHTML = t.toLocaleString("de-DE");
    tong += t;
  }
  document.getElementById("kq").innerHTML = tong.toLocaleString("de-DE");
}

function handleCart() {
  handlecost();
}
