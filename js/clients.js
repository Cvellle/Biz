window.addEventListener("load", clientsSlide)

var pos1 = 0, pos2 = 0;
function clientsSlide() {
    //queries
    const clients = document.querySelector('.clients');
    //position
    const position = clients.offsetTop * 0.7;
    //condition
    const condition = document.documentElement.scrollTop > position;

    if (condition) {
        clients.classList.add("clientsActive")
    }

    //SLIDE IMAGES

    const dragableEl = document.querySelector("#imagesRow");
    const image = [...document.querySelectorAll("#imagesRow img")];
    // const image = Array.from(document.querySelectorAll("#imagesRow img"));
    // const image = Array.apply([], document.querySelectorAll('#imagesRow img'));

    dragElement(dragableEl);

    let x1 = 0;
    let x2 = 0;

    function dragElement(element) {

        if (document.getElementById(element.id)) {
            document.getElementById(element.id).onmousedown = dragMouseDown;
        } else {
            element.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            pos2 = e.clientX;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            pos1 = pos2 - e.clientX;
            pos2 = e.clientX;
            x2 = e.clientX;
            let xDifference = x2 - x1;
            let movedFor = xDifference;

            element.style.left = (element.offsetLeft - pos1) + "px";
            let delEl = image[7];
            let addEl = image[7];
            let rotateAt = window.innerWidth / 3;

            debounce(closureCaller());         
        }

        function debounce(func, wait = 20, immediate = true) {
            var timeout;
            return function () {
                var context = this, args = arguments;
                var later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };


        function closeDragElement(e) {
            movedFor = 0;
            document.onmouseup = null;
            document.onmousemove = null;

            var node1 = document.createElement("IMG");
            node1.src = image[7].src;
            dragableEl.prepend(node1);

            var node2 = document.createElement("IMG");
            node2.src = image[6].src;
            dragableEl.prepend(node2);

            var node3 = document.createElement("IMG");
            node3.src = image[5].src;
            dragableEl.prepend(node3);

            var node4 = document.createElement("IMG");
            node4.src = image[4].src;
            dragableEl.prepend(node4);

            var node5 = document.createElement("IMG");
            node5.src = image[3].src;
            dragableEl.prepend(node5);

            var node6 = document.createElement("IMG");
            node6.src = image[2].src;
            dragableEl.prepend(node6);

            var node7 = document.createElement("IMG");
            node7.src = image[1].src;
            dragableEl.prepend(node7);

            var node7 = document.createElement("IMG");
            node7.src = image[0].src;
            node7.style.left = "transformx(-180vw)"
            dragableEl.prepend(node7);

            dragableEl.style.left = "-100vw !important";
            
            }

        }
    }
        

    window.addEventListener('scroll', clientsSlide);









  // for (let i = 0; i < image.length; ++i) {
            // var closureCaller = (function () {
            //     return function () {
            // if (movedFor > rotateAt) {
            //     movedRight = true;

                //rekurzija
                // inner(); 
            // }

            // if (movedRight) {
                // let source = image[7].src;
                // var node1 = document.createElement("IMG");
                // node1.src =  image[7].src;
                // dragableEl.prepend(node1);

                // var node2 = document.createElement("IMG");
                // node2.src = source;
                // dragableEl.prepend(node2);

                // var node3 = document.createElement("IMG");
                // node3.src = source;
                // dragableEl.prepend(node3);

                // console.log(image[s].src);
                // dragableEl.removeChild(delEl);
                // s.style.background = "url('./assets/intro-carousel/1.jpg')";
                // dragableEl.prepend(dragableEl.cloneNode(true));
            // }
            // }
            // })();
            // debounce(closureCaller());
            // }




    // 2 
    // const img = document.querySelectorAll('.imagesRow img');
    // img.forEach(el => el.addEventListener("mousedown", onDown));
    // img.forEach(el => el.addEventListener("mouseup", onUp));
    // img.forEach(el => el.addEventListener("mouseup", onUp));
    // img.forEach(el => el.addEventListener("mouseLeave", onLeave));
    // img.forEach(el => el.addEventListener("mousemove", onMove));
    //     let mouseDown = false;
    //     let x1 = 0;

    //     function onDown(event) {
    //         mouseDown = true;
    //         event.target.style.cursor = "grab";
    //         x1 = event.clientX;
    //     }

    //     function onUp (event) {
    //         mouseDown = false;
    //         event.target.style.cursor = "default";
    //     }

    //     function onLeave(event) {
    //         event.target.style.cursor = "default";
    //     }

    //     let x2 = 0;

    //     function onMove(event) { 
    //         x2 = event.clientX;
    //         console.log(x2)
    //         let newPostitionLeft = x2-x1;
    //         const element = event.target.parentElement;
    //         if (mouseDown) { 
    //             if (x2 > x1) {
    //                 element.style.marginLeft = (x2-x1) + "px"; 
    //             }

    //             if (x1 > x2) { 
    //                 element.style.marginLeft = `${(newPostitionLeft)}px`;
    //             }
    //             let el = element.style.marginLeft;
    //             if (el.substring(0, el.length - 2) > window.innerWidth/4) { 
    //                 // event.target.parentElement.parentNode.firstElementChild.style.marginLeft = `${(x2-x1)}px`;
    //             }
    //         }
    //     }
// }







// function elementDrag(e) {
//     pos1 = pos2 - e.clientX;
//     pos2 = e.clientX;
//     x2 = e.clientX;
//     let xDifference = x2 - x1;
//     let movedFor = xDifference;

//     element.style.left = (element.offsetLeft - pos1) + "px";
//     let delEl = image[7];
//     let addEl = image[7];
//     let rotateAt = window.innerWidth / 3;

//     debounce(closureCaller());


    // for (let i = 0; i < image.length; ++i) {
    // var closureCaller = (function () {
    //     return function () {
    // if (movedFor > rotateAt) {
    //     movedRight = true;

        //rekurzija
        // inner(); 
    // }

    // if (movedRight) {
        // let source = image[7].src;
        // var node1 = document.createElement("IMG");
        // node1.src =  image[7].src;
        // dragableEl.prepend(node1);

        // var node2 = document.createElement("IMG");
        // node2.src = source;
        // dragableEl.prepend(node2);

        // var node3 = document.createElement("IMG");
        // node3.src = source;
        // dragableEl.prepend(node3);

        // console.log(image[s].src);
        // dragableEl.removeChild(delEl);
        // s.style.background = "url('./assets/intro-carousel/1.jpg')";
        // dragableEl.prepend(dragableEl.cloneNode(true));
    // }
    // }
    // })();
    // debounce(closureCaller());
    // }
    // }

