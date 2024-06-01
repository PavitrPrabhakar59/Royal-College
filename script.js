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

window.addEventListener('load', function () {
  var imgan = document.querySelectorAll("div.imgan");

  imgan.forEach(function (element) {
    var img = element.querySelector("img");
    if (img.complete) {
      checkImageDimensions(img, element);
    }
  });
  function checkImageDimensions(img, element) {
    if (img.naturalWidth < img.naturalHeight) {
      element.classList.add("imgan-h");
    }
  }
});