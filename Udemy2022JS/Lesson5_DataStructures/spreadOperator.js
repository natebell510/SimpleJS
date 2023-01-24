'use strict'

const arr = [1,2,3,99,5,6,8,7];
console.log(...arr);
//create shallow copy

//Iterables are array, String, Map, Set, but not Object

const string = 'Jonas';
const ar = [...string];
console.log(ar);
console.log(...string);
