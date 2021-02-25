const menu = document.querySelector(".menu");
const open = document.querySelector(".open");
const navTwo = document.querySelector(".nav2");

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
