'use strict'
//primitive - number, boolean
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30
};
const friend = me; //friend is pointing to same object
friend.age = 27;//when one of object values is updated, object is immutable for both references
console.log(friend, friend.age);
console.log(me, me.age);
//call stack (primitive types (Number, String, Boolean, Undefined, Null, Symbol, BigInt))
// and heap (object (object literal, Arrays, Functions), reference types)
//Prototype Inheritance OOP with JS
//Event Loop - Async JS, Promises, Async/Await and Ajax
//DOM Advanced DOM Events

let lastName = 'Shportun';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage:`, jessica);
console.log(`After marriage:`, marriedJessica);

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family : ['Alice', 'Bob', 'Tony']
};
const jessicaCopy = Object.assign({}, jessica2); //shallow copy, not a deep clone;
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(`Before marriage:`, jessica2);
console.log(`After marriage:`, jessicaCopy);



