var scrollElement = document.querySelector("#scroll");
window.addEventListener("scroll", function () {
  var height = document.body.scrollHeight - this.innerHeight;
  var scrolledPixels = this.scrollY;
  var width = ((scrolledPixels / height) * 100).toFixed(2);
  scrollElement.style.width = width + '%';
});

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px"
}

var imgan = document.querySelectorAll("div.imgan");
var imgan_img = document.querySelectorAll("div.imgan>img");
for (var i = 0; i < imgan.length; i++) {
  imgan_img[i].addEventListener("load", CheckDimension);
}
function CheckDimension() {
  if (imgan_img[i].naturalWidth < imgan_img[i].naturalHeight) {
    imgan[i].classList.add("imgan-h");
  }
}