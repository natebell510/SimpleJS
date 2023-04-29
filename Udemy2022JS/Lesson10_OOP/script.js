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

//const h1 = document.querySelector('h1');


// https://www.youtube.com/watch?v=qRy7lij5qzc&list=PLd7dW_Jxkr_Yw6apt7tpzDC6X2mP5UhtQ&index=27  1:34:22


//class expression
//const PersonCE = class{}

//class declaration
class PersonCl{
  constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
  }
  //methods will be added to prototype property
  calcAge(){
      console.log(`${this.fullName}'s age is ${2037 - this.birthYear}`);
  }

  get age(){
      console.log(2037 - this.birthYear);
  }

  //set property that already exist use _.
  set fullName(name){
      if(name.includes(' ')){
          this._fullName = name;

      }else console.log(`${name} is not full name formatted.`)
  }

  get fullName(){
      return this._fullName;
  }

    //static method - is not available on instance but can be used as helper method about clas
    static hey(){
        console.log('Hey there!');
        console.log(this);
    }

}

const jessica = new PersonCl('jessica davis',1985);
console.log('constructor');
jessica.calcAge();//52

console.log(jessica.__proto__ === PersonCl.prototype);//true

PersonCl.prototype.greet= function (){
    console.log(`Hello ${this.fullName}`);
}
jessica.greet();
console.log('------------------------');
console.log(jessica);
console.log('------------------------');

const walter = new PersonCl('walter',1984);
console.log(walter);



//1. classes are not hoisted - can NOT be used before they are declared
//2. classes are first class citizens - pass and return from functions
//3. body of the class executed in strict mode

const account = {
    owner : 'jonas',
    movements : [100,23,669,88],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    },

};

console.log(account.latest);//88 getter is called as property
account.latest = 80808;
console.log(account.latest);


//static method
//Array.from(); is not a function

Person.hey1 = function(){
    console.log('Hey there!');
    console.log(this);
}
Person.hey1();

PersonCl.hey();

console.log('-*--*-*-*-*--*-*-**-*--*-*-*-*-*-*-*-*-*-*-');

//object literals
const PersonProto = {
    calcAgeProto(){
        console.log(`${this.firstName} is ${2037 - this.birthYear} years old.`);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);



steven.name = 'Steven';
steven.birthYear = 1999;
console.log(steven);
steven.calcAgeProto();//38

console.log(steven.__proto__); //{ calcAgeProto: [Function: calcAgeProto] }

const sarah = Object.create(PersonProto);
sarah.init('sarah', 1979);
sarah.calcAgeProto(); //58

//real classes do not exist in JavaScript

//2:26
//Inheritance
const Student = function(firstName, birthYear, course){
    //call function
    Person.call(this, firstName,birthYear);
    this.course = course;


};
//linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function (){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const mike = new Student('mike',1996,'CompScience');
console.log(mike);
mike.introduce();
mike.calcAge();//41

console.log(mike.__proto__);//contains introduce method
console.log(mike  instanceof  Student);
console.log(mike  instanceof  Person);
console.log(mike  instanceof  Object);



class StudentCl extends PersonCl{
    constructor(fullName, birthYear, course) {
        //super need to happen first, because super is called to this of parent class
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I am ${2022-this.birthYear} years old, I feel older, like ${2022 - this.birthYear + 10} years old`);
    }
}

const martha = new StudentCl('Martha Jones',2010, 'CS');
martha.introduce();
martha.calcAge();//27


//with create object, below is Prototype chain
const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;


}

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
};

const jay = Object.create(StudentProto);
jay.init('jay max', 2001,'Biology');
jay.introduce();


//3;15