'use strict'

//methods for String

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane.at(0));//A
console.log(plane[0]);//A

console.log(airline.length);//16
console.log(...airline);

//String has methods, some are similar to array methods
console.log(airline.indexOf('r'));//6
console.log(airline.lastIndexOf('r'));//10
console.log(airline.indexOf('Portugal'));//8 and it is case-sensitive

console.log(airline.slice(4));//Air Portugal
console.log(airline.slice(3, 9));// Air P

console.log(airline.slice(0, airline.indexOf(' ')));//TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));//Portugal

console.log(airline.slice(-2));//al
console.log(airline.slice(1, -1));

//write a function that receives seat request and returns row

const checkMiddleSeat = function (seat) {
    //B and E middle seats
    const s = seat.slice(-1);
    console.log(s === 'B' || s === 'E' ? 'This is a middle seat!' : 'This is NOT a middle seat!');
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');

// Strings are primitives, JS will convert String to String Object so the methods are called, boxing
console.log(typeof new String('Naz'));// object

//changing case of String

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in airline

let passenger = 'jOnaS';
passenger = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passenger);

//check email syntax
const email = 'helllo@jonas.io';
const login = '  hello@jonaS.iO \n';
const fixed = email.toLowerCase().trim();
console.log(fixed);

//replace parts of Strings

const priceGB = '288,97*';
const priceUS = priceGB.replace('*', '$');
console.log(priceUS);
const announcement = 'All passengers come to gate 23. Boarding gate 23!';
console.log(announcement.replaceAll('gate', 'door'));
console.log(announcement.replace(/door/g, 'gate'));

//
console.log(plane.includes('A320'));//true
console.log(plane.startsWith('B'));//false

//split
const word = 'a+nice+work';
console.log(word.split('+').toString().replace(/,/g, ' '));
const [firstName, lastName] = 'Naz Shportun'.split(' ');
//join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join('$');
console.log(newName);
//
const pass = 'jessica ann smith davis';
const capitalizeName = function (name) {
    const nameArr = name.split(' ');
    let names = [];
    for (const n of nameArr) {
        names.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    }
    console.log(names.join(' '));
}

capitalizeName(pass);
//Padding
const message = 'Go to Gate 23';
console.log(message.padStart(25, '+').padEnd(35, '+'));//++++++++++++Go to Gate 23++++++++++

const maskCreditCard = function (cardNumber) {
    const str = cardNumber + '';
    const last4 = str.slice(-4);
    console.log(last4.padStart(str.length, '*'));
}
const creditCardNumber = 4896365498792541;
maskCreditCard(creditCardNumber);//************2541

//Repeat
const message2 = 'Bad weather all day on all directions!';
console.log(message2.repeat(3));//Bad weather all day on all directions!Bad weather all day on all directions!Bad weather all day on all directions!

const planesInLine = function (numberOfPlanes) {
    console.log(`There are ${numberOfPlanes} planes in line!`.repeat(numberOfPlanes));
}
planesInLine(4);

//receives list of variable with underscore letter and converts it Upper case, all word to lowerCase and trims spaces

const camelCaseConverter = function (word) {
    let str = word.toLowerCase().trim();
    if (str.includes('_')) {
        const firstWord = str.slice(0, str.indexOf('_'));
        const secondWord = str.slice(str.indexOf('_') + 1);
        str = firstWord + secondWord[0].toUpperCase() + secondWord.slice(1);
        console.log(str);
    } else {
        console.log(str);
    }
}
camelCaseConverter('first_name');
const words = ['underscore_case', ' first_name', 'Some_Variable', '   calculate_AGE', 'delayed_departure'];
words.forEach(w => camelCaseConverter(w));

//part 15
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25' +
    '+_Arrival;bru0943384722;fao93766109;11:45' +
    '+_Delayed_Arrival;hel7439299980;fao93766109;12:05' +
    '+_Departure;fao93766109;lis2323639855;12:30';

const arr = flights.split('+');
console.log(arr);
for (const flight of arr) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed')?'!!!':''}${type.replaceAll('_',' ')} from ${from.slice(0,3).toUpperCase()} to ${to.toUpperCase().slice(0,3)} (${time.replace(':', 'h')})`
    console.log(output);
}

//PART 16