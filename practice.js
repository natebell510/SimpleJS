//define variable in Java Script
var firstName = 'Nazar';
let lastName = 'Shportun';
const country = 'Ukraine';

let age = 29;
let decimalNum = 2.3;
//write
console.log(firstName);
console.log(lastName);
console.log(country);
//char
var charValue = 'A';
console.log(charValue);
//
var name = firstName+' '+lastName;
console.log(name);
console.log('Full name is '+name);
//
console.log(firstName,lastName);
//if statement
if(true){
    console.log('condition is true');
}
//if
if(firstName=='Nazar'){
    console.log('my name is '+firstName);
}else{
    console.log('else block');
}
//invalid statement
if(firstName!='Nazar'){
    console.log('Not Nazar');
}else{
    console.log('Nazar is here with else block');
}
//
if(firstName=='Adam'&&lastName=='Shportun'){
    console.log(true);
}
//define function, method
function sayHello(){
    console.log('Hello World!');
}
sayHello();
//define function with argument
var car = 'Toyoda';
function printFullName(car){
    console.log(car);
}
//define function with argument
var car = 'Toyoda';
console.log(car);
function writeCarName(car){
    console.log(car+' '+'Allah Akbar');
}
writeCarName('BMW');
//define function with return
function add(a,b){
    let total = a+b;
    return total;
}
var result = add(2,6);
console.log(result);
//

console.log('Nazar');
var person = {
    f_name:'Nazar',
    l_name:'Rocket',
    age: 29,
    id: 456,
    sayHelloInPerson:function (){
        console.log('Hello '+person.f_name)
    }
};
console.log(person);
//adding new attributes
person.email = 'naz@gmail.com';
console.log(person);
//
person.phone = 1234567898;
console.log(person);
//how to get attribute value
console.log('My age is '  +person.age);
//how to get attribute value
console.log(person['f_name']);

// JS to JSON
person.sayHelloInPerson();
console.log(JSON.stringify(person));
//how to convert JSON to JavaScript object and assign in one variable
var personJSON = JSON.parse(JSON.stringify(person));
console.log(personJSON.age);
//hello, my pronouns are he/him, I am heterosexual, white caucasian male with white privilege that I never used

let socialMedias=['YT','FB','Insta'];
console.log('here is social media '+socialMedias.at(1));
// use for loop
for (let i = 0; i < socialMedias.length; i++) {
    console.log(socialMedias.at(i));
}
// how to add element into array list
socialMedias.push('LinkedIN');
console.log(socialMedias);
socialMedias.pop();
console.log(socialMedias);
//.at method and [index]
console.log(socialMedias[0]);
// with forEach
console.log('======================================');
socialMedias.forEach((item)=>{
    console.log(item)
})
console.log('======================================');
if(socialMedias.includes('YT')){
    console.log('YT is here')
}else {
    console.log('Not here')
}


