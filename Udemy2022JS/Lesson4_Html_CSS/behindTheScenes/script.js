'use strict';
//principles of JS:
//high level - hardware is not managed, low level ex. C - manage resources manually
//garbage collector - cleaning memory that we do not need
//Just-In-Time compilation, interpreted
//multi paradigm - approach of structuring code, coding style
//prototype based object-oriented
//first class functions
//dynamic - dynamically typed ex. let x = 23; let t = "Jonas";
//single-threaded
//non-blocking event loop

//JS Engine executes JS code, every browser has its own, V8 -> Chrome NodeJS
//Call Stack (references to objects) vs Heap (pool for objects)

//parsing - split and save it to tree AST to check for error

//Execution content - variable environment, scope chain, this keyword
/*
const a = 'Nazar';
first();
function first(){
    const b = 'Hello';
    second();
    function second(){
        const c = 'Hi';
        third();
    }
}
function third(){
    const d = 'Hey!';
    console.log(d + c + b + a);
    //Reference error - because c is not defined
}
 */

//scope is defined by Global, functions and blocks. Scope chain - every scope access to variable above, variable lookup.

function calcAge(birthYear) {
    const age = 2022 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age} years old, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true; // var is function scoped, not block scoped.
            //creating new variable with same name as outer scope variable
            const firstName = 'Steven'; // JavaScript looks for variable in current scope. Variable lookup
            //reassigning out scope variable
            output = 'New output';
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }


        }
        console.log(millenial);
        //console.log(add(4, 8)); //function block scoped under strict mode
        console.log(output);
    }

    printAge();

    return age;
}

const firstName = 'Nazar';
calcAge(1992);
//console.log(age); reference error - age is not defined.
//*//*///*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*//*

//HOISTING, Variable Environment
//TDZ Temporal Dead Zone
console.log(me);
//console.log(job); can not be accessed before initialization
//console.log(year);


var me = "Naz";
let job = 'teacher';
const year = 1991; // in TDZ

//
console.log(addDeclaration(4,5));
//console.log(addExpression(3,5));
//console.log(addArrow(2,5));

function addDeclaration(a, b) {
    return a + b;
}

const addExpression = function (a, b) {
    return a + b;
}
//var addArrow = (a, b) => a + b; // In TDZ

//Example:
const numProducts = 0;
if(numProducts === 0){
    deleteShoppingCart();
}
//declare functions and then use it, because of hoisting.
function deleteShoppingCart(){
    console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;

//this keyword
//arrow functions do not get this keyword
console.log(this);//{}
const calcSum = function (number){
    console.log(number+456);
    console.log(this);
}
calcSum(78); // 534, undefined

const calcSumArrow = number => {
    console.log(number+456);
    console.log(this);
}
calcSumArrow(78); // 534, {} window

var firstName1 = 'Matilda';
const jonas = {
    year : 1991,
    calcAge: function (){
        console.log(this);
        console.log(2022 - this.year);
    },
    greet: () => {
        console.log(`Hey ${this.firstName1}`);
        console.log(this);
    }
}
jonas.calcAge();//{ year: 1991, calcAge: [Function: calcAge] }
jonas.greet();//Hey undefined

const matilda = {
    year:2017
};
matilda.calcAge = jonas.calcAge; //method borrowing
matilda.calcAge(); //5

const f = jonas.calcAge;

// do not use arrow function as a method

