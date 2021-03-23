const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const navTwo = document.querySelector(".nav2");
const header = document.querySelector(".header");
const logo = document.querySelector(".logologo");
const sticky = header.offsetTop;

let closeMenu = false;

menu.addEventListener("click", toggle);

function toggle() {
  if (!closeMenu) {
    navTwo.classList.add("open");
    closeMenu = true;
  } else {
    navTwo.classList.remove("open");
    closeMenu = false;
  }
}

window.onscroll = function add() {
  if (window.pageYOffset > sticky) {
    header.classList.add("headerColor");
    logo.classList.add("logoColor");
  }
  if (window.pageYOffset === 0) {
    header.classList.remove("headerColor");
    logo.classList.remove("logoColor");
  }
};
