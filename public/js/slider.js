var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

var dem =0;
sliderCmt();
function sliderCmt() {
    var i;
    var x = document.getElementsByClassName("slider-cmt");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    dem++;
    if (dem > x.length) {dem = 1}    
    x[dem-1].style.display = "block";  
    setTimeout(sliderCmt, 2000); // Change image every 2 seconds
}