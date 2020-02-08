const nav = document.querySelector('nav');
const dropdownArrow = document.querySelector('ul#dropdown-arrow');
const dropdownContent = document.querySelector('#dropdown-content');
let dropdown = false;
function resizeNav() {
  if (window.scrollY < 55.400001525878906) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
}
window.addEventListener('scroll', resizeNav);

toggleDropDown = () => {
  if (dropdown) {
    dropdownContent.style.opacity = 1;
  } else {
    dropdownContent.style.opacity = 0;
  }
};
