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
//const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', function (e){
//   const s1coords = section1.getBoundingClientRect();
//   //scrolling
//  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);
//   /*
//   window.scrollTo({
//     left : s1coords.left + window.pageXOffset,
//     top : s1coords.top + window.pageYOffset,
//     behavior : 'smooth',
//   });
//    */
//
//   section1.scrollIntoView({
//     behavior : 'smooth'
//   });
// });
//const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert('addEventListener: great! you are reading the heading.');
//   //listen to event just once
//   h1.removeEventListener('mouseenter',alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);
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

//create random color rgb(0,0,0)
/*
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {

  this.style.backgroundColor = randomColor();
  //console.log('LINK', e.target, e.currentTarget);

  //stop propagation
  //e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

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

//document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e){
//   e.preventDefault();
//   const id = this.getAttribute('href');
//   document.querySelector(id).scrollIntoView({behavior : "smooth"});
//   })
// });


//1. add event listener to common parent element
//2. determine what element originated event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    //e.target help to see where event (click) happened
    //console.log(e.target);

    //matching strategy
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: "smooth"});
    }

});
//event can bubble up because there is parent -> child -> grandchild in html document DOM
const h1 = document.querySelector('h1');
//going downwards: child
//h1.querySelectorAll('.highlight')
//direct children
//console.log(h1.childNodes);
//h1.firstElementChild.style.color = 'white';
//h1.lastElementChild.style.color = 'red';

//going upwards - choosing parents
//console.log(h1.parentNode);
//console.log(h1.parentElement);
//h1.closest('.header').style.background = 'var(--gradient-secondary)';
//h1.closest('h1').style.background = 'var(--gradient-secondary)';

//going sideways - sibling and direct siblings
//console.log(h1.previousElementSibling);
//console.log(h1.nextElementSibling);
//h1.nextSibling
//h1.previousSibling
/*
[...h1.parentElement.children].forEach(function (el) {
  if(el !== h1)el.style.transform = 'scale(0.10)';
});
 */


//tab components
//select tabs
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
    //console.log(clicked);
    //Guard clause
    if (!clicked) return;
    //remove active classes
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'))
    //Active tab
    clicked.classList.add('operations__tab--active');

    //Activate content area
    document.querySelector(`.operations__content--${
        clicked.dataset.tab}`).classList.add('operations__content--active');
});

//fade out unselected element

//Menu fade animation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
    if(e.target.classList.contains('nav__link')){
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        siblings.forEach( el => {
            if(el !== link) el.style.opacity = this;
        })
        logo.style.opacity = this;

    }
};

//passing an argument into handler

//mouse over event - opposite mouse out
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout',handleHover.bind(1));


//Sticky navigation
////scroll event
const section1 = document.querySelector('#section--1');
// const initialCoordinates = section1.getBoundingClientRect();
//
// window.addEventListener('scroll', function (e){
//     if(window.scrollY > initialCoordinates.top) nav.classList.add('sticky');
//     else nav.classList.remove('sticky');
// });

//Intersection observer API
/*
const observerCallback = function (entries, observer) {
    entries.forEach( entry => {
        console.log(entry);
    } )
};
const observerOpts = {
    root : null,
    threshold: [0, 0.2]
};
const observer = new IntersectionObserver(observerCallback, observerOpts);
observer.observe(section1);
 */

//const header = document.querySelector('.header');
const navHeight =  nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if(!entry.isIntersecting)nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root:null,
    threshold : 0,
    rootMargin : `-${navHeight}px`
});
headerObserver.observe(header);

//reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer){
    const [entry] = entries;

    if(!entry.isIntersecting)return;
    entry.target.classList.remove('section--hidden');
    //to stop observing and improve performance
    observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
    root : null,
    threshold : 0.15,
});
allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

//image have biggest impact on page loading
//lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer){
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    //replace src with data-src
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {

    });

};
const imgObserver = new IntersectionObserver(loadImg, {
    root : null,
    threshold : 0
 });

imgTargets.forEach( img => imgObserver.observe(img));

