var deltailArr = new Array();
function clickProduct(x) {
    location.assign('detail-product.html')
    var boxsp = x.parentElement.children;
    var img = boxsp[0].src
    var title = boxsp[1].innerText
    var cost = boxsp[2].children[0].innerText
    // console.log(img, title, cost)
    var deltail = new Array(img, title, cost)
    deltailArr.push(deltail)
    sessionStorage.setItem('deltailArr', JSON.stringify(deltailArr))
    
}

function showDaltail() {
    var gh = JSON.parse(sessionStorage.getItem('deltailArr'))
    for (var i = 0; i < gh.length; i++) {
        var show =
        '<div class="wraper">'+
        '<div class="mycart-left mycart-dentail-left">'+
            '<img src="'+gh[i][0]+'" alt="">'+
            '<div class="product-info">'+
                '<h2>'+gh[i][2]+' đ</h2>'+
                '<span>'+gh[i][1]+'</span>'+
                '<div class="promotion">'+
                 '<h3>Ưu đãi</h3>'+
                     '<ul class="promotion-list">'+
                         '<li class="promotion-item">'+
                             '<i class="fa-solid fa-gift"></i>'+
                             '<p>Miễn phí vận chuyển đơn hàng dưới 100k</p>'+
                         '</li>'+
                         '<li class="promotion-item">'+
                             '<i class="fa-solid fa-gift"></i>'+
                             '<p>Giftcard lên đến 50k</p>'+
                         '</li>'+
                         '<li class="promotion-item">'+
                             '<i class="fa-solid fa-gift"></i>'+
                             '<p>Phiếu mua hàng trị giá 100k</p>'+
                         '</li>'+
                     '</ul>'+
                '</div>'+
                '<div class="bought-it">'+
                    '<h4>Mua hàng tại đây</h4>'+
                    '<div class="bought-it-here">'+
                        '<input style="height: 40px; width: 50px; font-size: 20px; padding: 5px;"  value="1" type="number">'+
                        '<button class="btn">Thêm vào giỏ hàng</button>'+
                    '</div>'+
                '</div>'+
            '</div>'+
           '</div>'+
       '</div>'
    }
    document.getElementById('deltail').innerHTML = show;
}
showDaltail()

document.getElementById('del').style.display = 'none';