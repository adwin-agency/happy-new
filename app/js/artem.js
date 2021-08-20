<<<<<<< HEAD
"use strict"
  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';

const initFunctions = ()=> {
=======
const initFunctions = () => {
>>>>>>> main
    map();
    accordion();
    swiperVideo();
}
const map = () => {
    ymaps.ready(init);
    function init() {
        const myMap = new ymaps.Map("map", {
            center: [59.9386, 30.3141],
            zoom: 10,
            controls: []
        });
    }
}

const accordion = () => {
    const accordions = document.querySelectorAll('.accordion');

    if (accordions) {
        accordions.forEach((accordion) => {
            accordion.addEventListener('click', showAccElement)
        })
    }

    function showAccElement() {
        const accItem = this.querySelector('.accordion__item');
        if (accItem) {
            accItem.hasChildNodes() ? this.classList.toggle('_show') : console.log('There is no content in the accordion');
            accItem.style.maxHeight ? accItem.style.maxHeight = null : accItem.style.maxHeight = accItem.scrollHeight + "px";
        } else return
    }
}
<<<<<<< HEAD

const swiperVideo = () => {
    const swiper = new Swiper('.video-reviews__container', {
        pagination: {
            el: ".video-reviews__pagination",
            type: "fraction",
          },
          navigation: {
            nextEl: ".video-reviews__button-next",
            prevEl: ".video-reviews__button-previous",
          },
    })
}

=======
>>>>>>> main


document.addEventListener("DOMContentLoaded", initFunctions);