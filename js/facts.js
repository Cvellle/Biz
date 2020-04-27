window.addEventListener("load", startProress)
let scrolledToFacts = false;
function startProress() {
   //queries
   const counter = [...document.querySelectorAll(".counter>span")];
   const startCounterAt = document.querySelector('.facts h2');
   //position
   const position = startCounterAt.offsetTop * 0.7;
   //condition
   const CounterCondition = document.documentElement.scrollTop > position;
   //timer
   const numbers = [274, 421, 1254, 18];
   const totalTime = 2000;
   const counterTime = numbers.map(num => {
      return (totalTime / num);
   });

   function startAll() {
      if (!scrolledToFacts) {
         numbers.forEach((num, index) => {
            let element = counter[index];
            let time = counterTime[index];
            for (let i = 0; i <= num; i++) {
               setTimeout(() => {
                  element.innerHTML = i;
               }, i * time);
            }
         });
      }
   }
   if (CounterCondition) {
      startAll();
      scrolledToFacts = true;
   }
}

window.addEventListener('scroll', startProress);
