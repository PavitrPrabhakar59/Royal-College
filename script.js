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

  imgan.forEach(function (element, index) {
    var img = element.querySelector("img");
    if (img.complete) {
      checkImageDimensions(img, element);
      img.addEventListener("click", () => {
        openPopup(index);
      })
    }
  });
  function checkImageDimensions(img, element) {
    if (img.naturalWidth < img.naturalHeight) {
      element.classList.add("imgan-h");
    }
  }
});

let currentIndex;

function openPopup(index) {
  currentIndex = index;
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");
  popupImg.src = document.getElementsByClassName("imgan")[index].getElementsByTagName("img")[0].src;
  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + document.getElementsByClassName("imgan").length) % document.getElementsByClassName("imgan").length;
  document.getElementById("popup-img").src = document.getElementsByClassName("imgan")[currentIndex].getElementsByTagName("img")[0].src;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % document.getElementsByClassName("imgan").length;
  document.getElementById("popup-img").src = document.getElementsByClassName("imgan")[currentIndex].getElementsByTagName("img")[0].src;
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    prevImage();
  } else if (event.key === "ArrowRight") {
    nextImage();
  } else if (event.key === "Escape") {
    closePopup();
  }
});