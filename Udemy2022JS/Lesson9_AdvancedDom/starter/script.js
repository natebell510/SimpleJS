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

//smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e){
  const s1coords = section1.getBoundingClientRect();
  //scrolling
 // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
  /*
  window.scrollTo({
    left : s1coords.left + window.pageXOffset,
    top : s1coords.top + window.pageYOffset,
    behavior : 'smooth',
  });
   */

  section1.scrollIntoView({
    behavior : 'smooth'
  });
});

const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: great! you are reading the heading.');
  //listen to event just once
  h1.removeEventListener('mouseenter',alertH1);
};
h1.addEventListener('mouseenter', alertH1);
/*
h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: great! you are reading the heading.')
});
 */
/*
h1.onmouseenter = function (e) {
  alert('addEventListener: great! you are reading the heading.')
};
 */








/*
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

message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//console.log(getComputedStyle(message));
//console.log(getComputedStyle(message).color);//rgb(187, 187, 187)
message.style.height = Number.parseFloat(getComputedStyle(message).height + 10) + 40 +'px';
document.documentElement.style.setProperty('--color-primary','orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
//logo.alt = 'Beautiful logo';
logo.setAttribute('company','Bankist');
console.log(logo.getAttribute('src'));
const link = document.querySelector('.twitter-link')
console.log(link.href);
console.log(link.getAttribute('href'));


//Data attributes
//logo.dataset.versionNumber - used to store data in html code

//classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle('c');
logo.classList.contains('');

//do not use, will override all classes
logo.className = 'jonnas';
 */




