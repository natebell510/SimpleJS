'use strict';
//1:36:00
// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '22.00', address}) {
        console.log(`Order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} around ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza : function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};
if(restaurant.orderPizza){
    restaurant.orderPizza('onions','spinach');
}
console.log('--------------------------------');
restaurant.orderPizza && restaurant.orderPizza('tomato','potato');


console.log('--------------------------------');
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
const guest2 = restaurant.numGuests || 10;
console.log(guest2);
console.log('--------------------------------');
if(restaurant.orderPizza()){
    restaurant.orderPizza('onions','spinach');
}


console.log('--------------------------------');
restaurant.orderPizza('mushrooms', 'onion','olives','spinach');
restaurant.orderPizza('mushrooms'); //mushrooms,[]

console.log('--------------------------------');
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2); //spread operator because on right side of assign operator '='
const [f, g, ...others] = [1, 2, 3, 4, 5];
console.log(f, g, others);
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
//Objects destructuring
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);


console.log('--------------------------------');
//Functions rest pattern , rest parameters - takes multiple and packs into one array
const add = function (...numbers) {
    let sum = 0;
    for (let x = 0; x < numbers.length; x++) {
        sum += numbers[x];
    }

    console.log(sum);
};
const h = [23, 5, 7];
add(...h);

console.log('--------------------------------');//spread operator to access individual elements
const ingredients = ["Let\'s make pasta, ingredient 1?", "Ingredient 2", "Ingredient 3"];
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
console.log('--------------------------------');
//Objects
const newRestaurant = {...restaurant, founder: "Guiseppe "};
console.log(newRestaurant);
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);


console.log('--------------------------------');
restaurant.orderDelivery({
    time: '22.40',
    address: 'Cranfield Link',
    mainIndex: 2,
    starterIndex: 2,
});
console.log('--------------------------------');
restaurant.orderDelivery({
    address: '111 Baybrook Drive',
    starterIndex: 1,
});
console.log('--------------------------------');


//
const arr1 = [7, 9, 0];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);
const newArr1 = [1, 2, ...arr1]; //spread operator
console.log(newArr1); //[ 1, 2, 7, 9, 0 ]

console.log(...newArr1);//1 2 7 9 0

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]
console.log('--------------------------------');
//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
//Join two arrays or more
const menuCopy = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...menuCopy);
console.log('--------------------------------');
//Iterable - array, maps, Strings, sets but NOT objects
const str = 'Jonas';
const letters = [...str, , 'S.'];
console.log(letters);
console.log(...str);


console.log('--------------------------------');

//Object destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

console.log('--------------------------------');
let l = 111;
let m = 999;
const obj = {l: 23, m: 7, n: 14};
({l, m} = obj);
console.log(l, m);
console.log('--------------------------------');
//nested objects
const {
    fri:
        {open: o, close: cl}
} = openingHours;
console.log(o, cl);


console.log('--------------------------------');
//------------------
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories; // ,skipped element, in array
console.log(main, secondary);

//switching variables
//const temp = main;
//main = secondary;
//secondary = temp;
[main, secondary] = [secondary, main];
console.log(main, secondary);
//*/*/*/*/*
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
//Nested destructuring
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
