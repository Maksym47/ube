'use strict';

let burgerBtn = document.querySelector('.burger_btn'),
    menu = document.querySelector('.menu');

burgerBtn.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    burgerBtn.classList.toggle('burger_btn_active');
});