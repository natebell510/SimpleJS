'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//DOM, HTML collection
//console.log(document.documentElement);
//const allSections = document.querySelectorAll('.section');
//document.getElementById('section--1');
//const allButtons = document.getElementsByTagName('button');
//document.getElementsByClassName('btn');

//creating and inserting elements
//insertAdjacentHtml
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);
//prepend and append can be used to move elements, element is unique and can be moved once
header.append(message);
//header.append(message.cloneNode(true)); // can clone element with children
//header.before(message);
//header.after(message);

//delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  //message.remove();
  message.parentElement.removeChild(message); //DOM traversing
});




