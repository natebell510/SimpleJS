'use strict';
// strict mode helps to avoid incidental errors, forbids to do certain actions.
let hasDriversLicense = false;
const passTest = true;
//use const by default
if(passTest){
    hasDriversLicense = true;
}
if(hasDriversLicense){
    console.log("I can drive!")
}
//const interface = 'Audio'; Unexpected strict mode reserved word
//const private = 5; //Unexpected strict mode reserved word
function logger(text){
    console.log(`printing log of ${text}`);
}
logger("cat");
function foodProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
foodProcessor(5,6);

const appleJuice = foodProcessor(5,0);
console.log(appleJuice);
//DRY do not repeat yourself
const num = Number('23');
console.log(num);

//calculate age base on birth year
//function declaration
function calcAge(birthYear) {
    return 2022 - birthYear;
}
const myAge = calcAge(1992);
console.log(myAge);

const ageOfMark = calcAge(1987);
console.log(ageOfMark);
//function expression, anon function
const calcAge2 = function (birthYear){
    return 2022 - birthYear;
}
console.log(myAge,ageOfMark,calcAge(1965));
// Arrow Function
const ageCalc3 = birthYear => 2022 - birthYear;
console.log(ageCalc3(1987));

//
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}
console.log("Years to retirement: " + yearsUntilRetirement(1992, "Nazarii"));
//calling function in a function
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges){
    const applesPieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applesPieces} piec
    es of apple and ${orangesPieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(5,9));
console.log("--=-=-=-=-=-=-=-=-==-=-=-=-=-=-")

// Coding task
/*
team1 team2
competes 3 times and average calculated, if doubled average team wins
1. arrow function to calculate averageScore of 3 values;
2. use function to calculate score for teams
3. create function check winner: takes params average scores of 2 teams, log scores
4. team wins if has doubled score, else nobody wins
5. checkWinner for Data 1 and Data 2
 */

const dolphinScore1 = [44, 23, 71];
const dolphinScore2 = [85, 54, 41];
//
const koalaScore1 = [65, 54, 49];
const koalaScore2 = [23, 34, 27];

const averageScore = (x, y, z) => {
    return (x + y + z)/ 3;
}
const dolphinAverageScore1 = averageScore(44, 23, 71);
const dolphinAverageScore2 = averageScore(85, 54, 41);
const koalasAverageScore1 = averageScore(65, 54, 49);
const koalasAverageScore2 = averageScore(23, 34, 27);

function checkWinner(avgScore1, avgScore2){
    if(avgScore1 > (avgScore2 *2)){
        console.log("Dolphins won!");
    }else if(avgScore2 > (avgScore1 * 2)){
        console.log("Koalas won!");
    }else{
        console.log("Nobody won!");
    }
}
// for data 1
checkWinner(dolphinAverageScore1,koalasAverageScore1);
console.log("--=-=-=-=-=-=-=-=-==-=-=-=-=-=-")
//for data 2
checkWinner(dolphinAverageScore2,koalasAverageScore2);

//INTRODUCTION TO ARRAYS
const years = [1992, 1995, 1993, 2022, 2015];
console.log(years)
years.forEach( x => console.log(x))
const numbers = new Array(19,29,2,98);
console.log(numbers[0]);

years [2] = 900;
console.log(years[2]);

const firstName ="Naz";
const naz = [firstName, 29, 'Shportun', 255 - 215];
console.log(naz);
years.push(1666);
years.push(1991);
console.log(years);

console.log(years.length);
//put value on first position (head)
years.unshift(1000);
console.log(years);
const lastEl = years.pop();
console.log(lastEl);
years.shift(); //removes first
console.log(years);
console.log(years.indexOf(2022));//3
console.log(years.includes(5));
console.log(years.includes(1990));
if(years.includes(1992)){
    console.log("I was born on 1992");
}
//coding task 2

const tipValue =  (billValue) =>{
   return billValue >= 50 && billValue <= 300 ? billValue *0.15 : billValue * 0.2;
   
}
console.log(tipValue(100));
const bills = [100, 65, 200, 245];
const finalBill = [];
for (let i = 0; i < bills.length; i++){
    finalBill.push(bills[i] + tipValue(bills[i]));
}
console.log(finalBill);
const values = [bills,finalBill];
console.log(values);
const jack = {
    name : "Mack",
    weight : 145,
    job : "miller",
    money : values,
    cars : ['BMW','Toyota']

};
console.log(jack);
console.log(jack.weight);


const calcTip = function (bill){
    return bill >=50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills1 = [125, 555, 44];
const tips1 = [calcTip(bills1[0]), calcTip(bills1[1]), calcTip(bills1[2]) ];
const totals = bills1[0] + tips1[0];
console.log(totals)
console.log("=---=--=-=-=-=-=-=-=-=--=")
const customer = {
    name: "Nazar",
    weight: 220,
    height : 6.1,
    people : ["person a", "person b", "person c"]
}
console.log(customer.name)
console.log(customer.weight)

// object literal syntax
const order = {
    location : "UA",
    package : "box",
    size : "XL",
    distance : 1000 - 453,
    link : "www.html.com"
}
console.log(`${order.package} is going to ${order.location}`);
console.log(order); // printed in alphabetical order
console.log(order.distance);
// can be as array
const boxSize = 'size';
console.log(order[boxSize])
//const interestedIn = prompt('What do you want to know about order?');
//console.log(order[interestedIn]); // expression between brackets will evaluated
//if(order[interestedIn]){
//    console.log(order[interestedIn])
//}else{
//    console.log('wrong request or item does not exist!')
//}
console.log(order['link']);
//task print person b
console.log(`I am ${customer.people[1]}`);


const nazar = {
    firstName : "Nazar",
    lastName : "Shportun",
    birthYear : 1992,
    job : "QA Engineer",
    friends : ["no1","no2"],
    hasDriversLicense : true,
    calcAge2 : function () {
        return 2022 - this.birthYear;
    },
    getSummary : function (){
        return `${this.firstName} is ${this.calcAge2()} years old and he ${this.hasDriversLicense === true ? 'has' : 'does not have'} driving license!`;
    }
}

const age = nazar.calcAge2(nazar.birthYear);//30
console.log(nazar['calcAge2'](1992));//30
console.log(typeof nazar.job);
console.log(nazar.getSummary());

//task
// BMI = mass / height * height; kg and meters
// 78kg, 1.69m; 92kg, 1.95m;
//create two object John and Marko

const john = {
    name : "John",
    weight : 78,
    height: 1.69,
    calcBMI : function () {
        return this.bmi = this.weight / this.height **2;
    }

}
const mark = {
    name : "Mark",
    weight : 92,
    height: 1.95,
    calcBMI : function () {
        return this.bmi = this.weight / this.height **2;
    }

}

//output: "Name(bmi) bmi is higher than name2 (bmi)"
console.log(`${john.calcBMI() > mark.calcBMI() ? john.name + ' ' + john.calcBMI() : mark.name + ' ' + mark.calcBMI()} has higher BMI than ${john.calcBMI() < mark.calcBMI() ? john.name + ' ' + john.calcBMI() : mark.name + ' ' + mark.calcBMI()}`);
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
const jonas = [
    'Jonas',
    'Schmidt',
    2022 - 1991,
    'teacher',
    ['A','B','C']
];
for (let i = jonas.length - 1; i >= 0; i --){
    console.log(i+'. '+jonas[i]);
}
// nested loop
for (let exercise = 1; exercise < 4; exercise ++){
    console.log(`--Starting exercise ${exercise} ---`);
    for (let rep = 1; rep < 6 ; rep++) {
        console.log(`Lifting weight repetition #${rep}`);
    }
}



// time stamp: 4:10:00 on 2





