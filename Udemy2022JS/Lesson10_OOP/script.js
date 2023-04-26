'use strict';

/*
Abstraction - to ignore (hide) details that do not matter.
Encapsulation - keeping properties and methods private inside the class, so they are not accessible. exposed methods for API
Inheritance - sharing properties of parent super class to child subclass, to avoid duplicate code, no to spaghetti code,
child class extend parent class. child inherits properties from parent class , it forms hierarchy
Polymorphism - child class can overwrite a method inherited from  a parent class. ability to take many shapes

Class is a blueprint for an object, object is instance of a class
 */
//OOP in JavaScript
/*
Prototype is linked to object, prototypal inheritance, Prototype contains methods and properties, accessible to all objects
behavior - methods - delegation, object delegates its behavior to prototype. different that in Java.
ex. Array inherits map method from Array.prototype.

 */

//Constructor functions

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    //NEVER create a method in Constructor function, because each object will carry this function, performance issue
    //this.calcAge = function () {
      //  console.log(2037 - this.birthYear);
    //}



};
const naz = new Person('Naz',1992);
//1. new empty object {} is created
//2. function is called, this = {}
//3. {} Linked to prototype
//4. function automatically returns {}

const matilda = new Person('matilda',1995);
const jonas = new Person('jonas',1999);
console.log(matilda instanceof  Person);

//Prototypes
Person.prototype.calcAge = function (){
    console.log(2037 -this.birthYear)
};

console.log(Person.prototype);
jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);//{ calcAge: [Function (anonymous)] }
console.log(jonas.__proto__ === Person.prototype); //true

console.log(Person.prototype.isPrototypeOf(jonas)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName')); //true

//because species was created not in Constructor
console.log(jonas.hasOwnProperty('species')); //false

//Prototype - not of Person, but object created by person. Created object will call to prototype. object and its prototype form a chain
//all objects in JS have prototype.


console.log(jonas.__proto__.__proto__);//[Object: null prototype] {}
console.log(jonas.__proto__.__proto__.__proto__); //null
console.dir(Person.prototype.constructor); //f Person()


const arr = [3,6,4,5,8,3,3,3,3,3,3,8];
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype); //true
console.log(Object.__proto__ === Array.prototype);//false

console.log(arr.__proto__.__proto__);//[Object: null prototype] {}

Array.prototype.unique = function (){
    return [...new Set(this)];
};
console.log(arr.unique());//[ 3, 6, 4, 5, 8 ]

//do not use technique above - because someone else can update same method with different functions

const h1 = document.querySelector('h1');


// https://www.youtube.com/watch?v=qRy7lij5qzc&list=PLd7dW_Jxkr_Yw6apt7tpzDC6X2mP5UhtQ&index=27  1:34:22






