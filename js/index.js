'use strict'

const botonMenu = document.querySelector('.toggle');
const items = document.querySelectorAll('.item');

botonMenu.addEventListener('click', () =>{
 for (const item of items) {
    item.classList.toggle('active');
 }
});