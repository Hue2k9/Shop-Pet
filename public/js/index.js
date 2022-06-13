//-----------------------------------cart------------------------
const cart = new Array();
const list = JSON.parse(localStorage.getItem("cart")) || [];
const btn = document.querySelectorAll(".product-right-item-btn");
btn.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    var btnItem = e.target;
    var productItem = btnItem.parentElement;

    var productImg = productItem.querySelector(".product-right-item-avt").src;
    var productTitle = productItem.querySelector(
      ".product-right-title"
    ).innerText;

    var productLink = productItem.querySelector(".link-detail").href;

    var productCost = productItem.querySelector(
      ".product-right-item-cost"
    ).innerText;
    let quantity = 1;
    // addCart(productTitle, productCost, productImg);
    //  addCartPay()
    DeleteProduct();
    console.log(productLink);
    const sp = new Array(
      productImg,
      productTitle,
      productCost,
      quantity,
      productLink
    );
    list.push(sp);
    localStorage.setItem("cart", JSON.stringify(list));
    handlePrice();
  });
});

function addCart(productTitle, productCost, productImg) {
  var productList = document.querySelector(".cart-product-list");
  // console.log(localStorage.getItem("cart"));
  var addProduct = document.createElement("li");
  let list = localStorage.getItem("cart");
  // for (let i = 0; i < list.length(); i++) {

  // }
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
// const detailArr = json.parse(localStorage.getItem("cart"));
function clickProduct(x) {
  // location.assign(
  //   "http://localhost:3000/api/products/629c53ff9e480d506e07345a"
  // );
  // var boxsp = x.parentElement.children;
  // var img = boxsp[0].src;
  // var title = boxsp[1].innerText;
  // var cost = boxsp[2].children[0].innerText;
  // console.log(img, title, cost);
  // var deltail = new Array(img, title, cost);
  // deltailArr.push(deltail);
  // console.log(JSON.stringify(deltailArr));
  // localStorage.setItem("deltailArr", JSON.stringify(deltailArr));
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
  location.assign("product-cart.ejs");
}
function showcart() {
  let sp = localStorage.getItem("cart");
  let hang = JSON.parse(sp);

  let show = hang;
  let tong = 0;
  let text = "";
  let addProduct;
  for (let i in show) {
    tong += Number(hang[i][2]) * 1000;
    text += `<li class="cart-product-items">
    <img src="${show[i][0]}" alt="">
    <div class="product-content">
       <a href="${show[i][4]}"> <p>${show[i][1]}</p></a>
        <span class="product-cost">${show[i][2]}</span>
        <span class="product-VND">đ</span>
    </div>
    <div class="delete-product">
        <i class="fa-solid fa-xmark"></i>
    </div>
</li>`;

    var productList = document.querySelector(".cart-product-list");
    addProduct = document.createElement("li");
  }
  text +=
    '<button onclick="handleCart()" class="btn">Cập nhật lại giỏ text</button> </div>';
  addProduct.innerHTML = text;
  productList.appendChild(addProduct);
  document.getElementById("demsl").innerHTML = hang.length;
  document.getElementById("kq").innerHTML = tong.toLocaleString("de-DE");
}

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
