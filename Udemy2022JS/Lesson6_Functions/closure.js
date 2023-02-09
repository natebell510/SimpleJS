'use strict'

const secureBooking = function (){
    //closure is not used explicitly like new array or new function
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers.`)
    }

}
const booker = secureBooking();
booker();
booker();
//function has access to the variable environment of the execution context in which it was created.

//console.dir(booker);

let f;
const g = function (){
    const a = 23;
    f = function () {
        console.log(a*2);
    }
}
const h = function (){
    const b = 777;
    f = function () {
        console.log(b*2);
    }
}


g();
f();
//reassigned f
h();
f();

//example 2 of closure

const boardPassengers = function (n, wait){
    const perGroup = n/3;
    setTimeout(function(){
        console.log(`We are now boarding ${n} passengers.`);
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    },wait * 1000);
    console.log(`Will start boarding in ${wait} seconds.`);
}
const perGroup = 1000;

boardPassengers(180, 3);


//
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click',function (){
        header.style.color = 'blue';
    })
})();


