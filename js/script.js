const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#menu");
const fullBody = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  fullBody.classList.toggle("active");
}
