// Swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menu.classList.toggle('bx-x'); 
});

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}