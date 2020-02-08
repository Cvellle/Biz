window.addEventListener("load", skills)

function skills() {
   function startProress() {
      //queries
      const bar = document.querySelectorAll('.bar');
      const startProgressAt = document.querySelector('.skills h2');
      //position
      const position = startProgressAt.offsetTop / 1.5;
      //condition
      const condition = document.documentElement.scrollTop > position;

      function grow() {
         bar[0].firstElementChild.classList.add("width100") 
         bar[1].firstElementChild.classList.add("width90") 
         bar[2].firstElementChild.classList.add("width75") 
         bar[3].firstElementChild.classList.add("width55") 
      }

      if (condition) {
         grow() 
      }

   }

   window.addEventListener('scroll', startProress);
} 
