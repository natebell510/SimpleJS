'use strict';

const oneWord = function(str){
    return str.replaceAll(' ','').toLowerCase();
};
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase() ,... others].join(' ');
}
//Higher order function
const transformer = function(str, fn){
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by ${fn.name}`);
}
transformer('JavaScript is the best',upperFirstWord);
transformer('My name is Joseph',oneWord);

const greet = function (greeting){
    return function (name){
        console.log(`${greeting} ${name}`);
    }
}
//first function returns function which is stored to greeter and that function takes argument name
const greeter = greet('Hallo');
greeter('Jonas');
greeter('Steven');
greet('Ola')('Puto'); // example of both function called


const arrowGreet = (greeting) => name => {
    console.log(`${greeting} ${name}`);
}

arrowGreet('zdorov')('Bogdan');

// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//BIND method - manually set this keyword, return new function where this keyword is bound
const bookEW = book.bind(eurowings);
bookEW(234,'Steven Williams');

const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

const bookEW23 = book.bind(eurowings, 23);
bookEW23('James Scarborough');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function (){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

/*/
document.querySelector('.buy')
    .addEventListener('click',lufthansa.buyPlane.bind(lufthansa));


 */
const addTax = (rate, value) => value + value * rate;
console.log(0.2, 200);

const addVAT = addTax.bind(null, 0.24);
console.log(addVAT(100));
console.log(addVAT(23));
//
const addTaxRate = function (rate){
    return function(value){
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.24);
console.log(addVAT2(0.24));

console.log(addVAT2(100));
console.log(addVAT2(23));
//part 17




