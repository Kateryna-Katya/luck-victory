import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.transformations-swiper', {
        modules: [Navigation],
        breakpoints: {
            375: {
                slidesPerView: "auto",
                spaceBetween: 10,
            },
         
            1439: {
                slidesPerView: "auto",
                spaceBetween: 10,
            },
        },
        centeredSlides: false,
        loop: true,
        slideClass: 'transformations-swiper-slide',
        wrapperClass: 'transformations-swiper-wrapper',
        direction: 'horizontal',

        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },

        on: {
            reachBeginning: function () {
                document.querySelector('.custom-prev').classList.add('swiper-button-disabled');
            },
            reachEnd: function () {
                document.querySelector('.custom-next').classList.add('swiper-button-disabled');
            },
            slideChange: function () {
                const activeIndex = this.realIndex;
                const items = document.querySelectorAll('.pagination-item');

                items.forEach((item, index) => {
                    if (index === activeIndex) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            },
        },
    });
});