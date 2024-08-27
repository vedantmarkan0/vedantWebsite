// creating function for buttons, targetting element then using elemnt
function toggleMenu() {
    const menu = document.querySelector(".menu-links"); //targetting
    const icon = document.querySelector(".hMenu-icon");
    menu.classList.toggle("open"); //clicking will add/remove "open" class ( styled in css )
    icon.classList.toggle("open");
}




// import './style.scss';

// document.addEventListener('DOMContentLoaded', () => {
//     const interBubble = document.querySelector('.interactive');
//     let curX = 0;
//     let curY = 0;
//     let tgX = 0;
//     let tgY = 0;

//     function move() {
//         curX += (tgX - curX) / 20;
//         curY += (tgY - curY) / 20;
//         interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
//         requestAnimationFrame(move);
//     }

//     window.addEventListener('mousemove', (event) => {
//         tgX = event.clientX;
//         tgY = event.clientY;
//     });

//     move();
// });