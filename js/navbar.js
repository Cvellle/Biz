const nav = document.querySelector('nav');
const dropdownArrow = document.querySelector('#dropdown-arrow');
const dropdownArrowUp = document.querySelector('#dropdown-arrow2');
const dropdownContent = document.querySelector('#dropdown-content');
const dropdownLink = document.querySelector('.dropdown-link');
let dropdown = false;

// NAV
function resizeNav() {
  if (window.scrollY < 55) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
}

// DROPDOWN
var media = window.matchMedia("(max-width: 1024px)")
if (media.matches) {
  dropdownLink.addEventListener("click", toogleDropdown);

  function toogleDropdown(e) {
    e.stopPropagation();
    if (dropdownArrow.style.display !== "none") {
      dropdownArrow.style.display = "none";
      dropdownArrowUp.style.display = "inline";
      dropdownContent.style.height = "auto";
      dropdownContent.style.opacity = "1"
    }
    else {
      dropdownArrow.style.display = "inline";
      dropdownArrowUp.style.display = "none";
      dropdownContent.style.height = "0";
      dropdownContent.style.opacity = "0"
    }
  }
}

// HIDE AND SHOW SIDEBAR
const hamburger = document.querySelector(".fa-bars");
const x = document.querySelector(".fa-close");
const sidebar = document.querySelector("nav ul");

hamburger.onclick = function () {
  this.style.display = "none";
  this.nextElementSibling.style.display = "block";
  sidebar.style.transform = "translate(0)";
}

x.onclick = function () {
  this.style.display = "none";
  this.previousElementSibling.style.display = "block ";
  sidebar.style.transform = "translate(-40vw, 0)";
}
