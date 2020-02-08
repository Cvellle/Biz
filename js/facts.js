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

   // 2 - setInterval

   // let count0 = 0;
   // let count1 = 0;
   // let count2 = 0;
   // let count3 = 0;

   // const count = {
   //    count0: 0,
   //    count1: 0,
   //    count2: 0,
   //    count3: 0
   // }

   //    function startAll() {
   //       if (!scrolledToFacts) {

   //          const interval = {
   //             interval1: setInterval(startCount0, 1.6),
   //             interval2: setInterval(startCount1, 1),
   //             interval3: setInterval(startCount2, 4),
   //             interval4: setInterval(startCount3, 80)
   //          }

   //          function startCount0() {
   //             var x;
   //             for (x in count) {
   //                count[x] += 1;
   //             }
   //             if (counter[0].innerHTML == counter[0].dataset.count) {
   //                clearInterval(interval[0]);
   //             } else {
   //                counter[0].innerHTML = Object.values(count)[0];
   //             }
   //          }

   //          function startCount1() {
   //             if (count1 == counter[1].dataset.count) {
   //                clearInterval(interval[1]);
   //             } else {
   //                count1 += 1;
   //                counter[1].innerHTML = count1;
   //             }
   //          }

   //          function startCount2() {
   //             if (count2 == counter[2].dataset.count) {
   //                clearInterval(interval[2]);
   //             } else {
   //                count2 += 4;
   //                counter[2].innerHTML = count2;
   //             }
   //          }

   //          function startCount3() {
   //             if (count3 == counter[3].dataset.count) {
   //                clearInterval(interval[3]);
   //             } else {
   //                count3 += 1;
   //                counter[3].innerHTML = count3;
   //             }
   //          }
   //       }
   //    }

}

window.addEventListener('scroll', startProress);




   // const interval = {
   //    interval1: setInterval(startCount, 6),
   //    interval2: setInterval(startCount, 1),
   //    interval3: setInterval(startCount, 1),
   //    interval4: setInterval(startCount, 80)
   // }

   // function startCount() {
   //    for (i = 0; i < counter.length; ++i) {

   //       var x;
   //       for (x in count) {
   //          count[x] += 1;
   //       }
   //       if (counter[i].innerHTML == counter[i].dataset.count) {
   //          clearInterval(interval[i]);
   //       } else {
   //          counter[i].innerHTML = Object.values(count)[i];
   //       }
   //    }
   // }




   //Closure   

   // var closureCount = (function () {
   //    let countValue = Object.values(count)[0];

   //    if (countValue == counter[0].dataset.count) {
   //       clearInterval(interval[0]);
   //    } else {
   //       return function () {
   //          countValue += 1;
   //          return countValue
   //       }
   //    }
   // })();