window.onscroll = function() {headerFixed()};
var header = document.querySelector(".header");
var headerContent = document.querySelector(".header__body");
var sticky = headerContent.offsetTop;

function headerFixed() {
  if (window.pageYOffset > sticky) {
    header.classList.add("_fixed");
    headerContent.classList.add("_fixed");
  } else {
    header.classList.remove("_fixed");
    headerContent.classList.remove("_fixed");
  }
}