'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//close modal function
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
////open modal function
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}

//close window
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//key support
document.addEventListener('keydown',function (e) {
    if(e.key == 'Escape'&&!modal.classList.contains('hidden')){
        closeModal();
    }
})

