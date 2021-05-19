'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const sliderNavBtn = document.querySelectorAll('.articles__slider-nav');

    sliderNavBtn.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').src = 'assets/arrow-white.png';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('img').src = 'assets/arrow.png';
        });
    });



    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.header__nav-list'),
          menuItem = document.querySelectorAll('.header__nav-item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('menu__active');
            menu.classList.toggle('hamburger__active');
        });
    });
});