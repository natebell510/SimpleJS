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
    const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
    return juice;
}
console.log(fruitProcessor(5,9));





















