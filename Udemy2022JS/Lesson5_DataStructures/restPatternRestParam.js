'use strict'

const person = {
    name: 'Nazar',
    age: 30,
    height: 186,
    weight: 110,
    hobbies: ['cars', 'books', 'history'],
    birthData: {
        day: '11',
        month: 'October',
        year: 1992
    },
    doSomething: function (...activities) {
        activities.forEach(x => console.log(`${person.name} likes ${x}`));

    }
};

const arr = [1, 2, 3, 4, 5, ...[6, 7]];

//REST pattern - takes elements and puts to an array. REST element is always last.
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
console.log('--------------------------');
const [cars, , subject] = [...person.hobbies];
console.log(cars, subject);
console.log('--------------------------');
const names = ['John', 'Ann', ['Lisa', 'Baco', 'Anatol']];
const [male1, female1, diff] = [...names];
console.log(male1, female1, diff);
console.log('--------------------------');
console.log(person.birthData.month);
console.log('--------------------------');
//
//
// Functions - REST takes params and packs to array, REST arguments
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
    console.log(numbers);
};
add(2, 5);
add(1, 6, 7, 8, 9, 155);

const x = [12, 56, 777];
add(...x);

person.doSomething('walking', 'running');

person.birthData.day = 0;
const day = person.birthData.day ? person.birthData.day : 10;
console.log(day);

const day2 = person.birthData.day ||99;
console.log(day2);

//
console.log('-----OR-----------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello'&& 23 && null && 'jonas'); //null

if(person.doSomething){
    person.doSomething('homework', 'sell on FBA');
};

person.doSomething && person.doSomething('hiking'); //do not use && and || it makes code complicated

//nullish coalescing operator - null undefined (NOT 0 or '')
const hob = person.hobbies ?? 10;
console.log(hob);


//logical assignment
const person1 = {
    name:'Costa',
    age : 0
};

const person2 = {
    name:'Anders',
    age : 0
};

person1.age ||= 10;

//nullish assignment operator
person2.age ??= 90;
//{ name: 'Costa', age: 10 }
// { name: 'Anders', age: 0 }
console.log(person1);
console.log(person2);

person1.name = person1.name && '<ANON>';
console.log(person1);//{ name: '<ANON>', age: 10 }




