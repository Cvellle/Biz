window.addEventListener("load", startSlide)

function startSlide() {
   //queries 
   const slideInTitle = document.querySelector('.servicesTop');
   const slideIn1 = document.querySelector('.row1');
   const slideIn2 = document.querySelector('.row2');
   //positions
   const positionTitle = slideInTitle.offsetTop / 2.5;
   const positionRow1 = slideIn1.offsetTop / 2.5;
   const positionRow2 = slideIn2.offsetTop / 2.5;
   //conditions
   const conditionTitle = document.documentElement.scrollTop > positionTitle;
   const conditionRow1 = document.documentElement.scrollTop > positionRow1;
   const conditionRow2 = document.documentElement.scrollTop > positionRow2;

   if (conditionRow1) {
      slideIn1.classList.add("servicesActive")
   }

   if (conditionRow2) {
      slideIn2.classList.add("servicesActive")
   }

   if (conditionTitle) {
      slideInTitle.classList.add("servicesTitleActive")
   }
}

window.addEventListener('scroll', startSlide);

