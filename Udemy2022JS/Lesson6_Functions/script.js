'use strict'


const bookings = [];
const createBooking = function (flightNumber, numberOfPassenger = 1, price = 199 * numberOfPassenger){

    const booking = {
        flightNumber,
        numberOfPassenger,
        price
    }
    console.log(booking);
    bookings.push(booking);
}
createBooking('LH123',320);

const flight = "KI145";
const jonas = {
    name: 'Jonas',
    passport : 'AB15514'
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH0001';
    passenger.name = 'Mr. ' + passenger.name;
    if(passenger.passport == '4B565456t54'){
        console.log('Check In')
    }else{
        console.log('wrong passport')
    }


}
//value is copied and reassigned and Jonas became Mr. Jonas
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 1000000);
}
newPassport(jonas);
console.log(jonas);

//JS does not have passing by reference , only by value

//Fundamental property of JS is first class functions, first citizen. function are treated as values.

const add = (a,b) => {return a+b};
console.log(add(123,566))


