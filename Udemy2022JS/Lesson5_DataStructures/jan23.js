'use strict'
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
    orderDelivery : function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be
        delivered to ${address} at ${time}`);
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
const newMenu = [...restaurant.mainMenu, 'Potato Motatro'];
console.log(newMenu);

const mainMenuCopy = [...restaurant.mainMenu];
//Join 2 arrays
const twoArrays = [...restaurant.mainMenu, ...newMenu];
console.log(twoArrays);
//spread operator works on all iterables
const arr1 = [5,7,8,9];
const badNewArr = [1,2,arr1[0],arr1[2]];
console.log(badNewArr);
const goodNewArr = [1,2,...arr1];//spreading array
console.log(goodNewArr);

restaurant.orderDelivery(
    {
        time: '22:30',
        address : 'Corona',
        mainIndex : 2,
        starterIndex : 2,
    });

restaurant.orderDelivery({
    address:'calgary',
    starterIndex:2
});



console.log('--*-*-*-*-*-*-*-*-**-*--*-**-*-')

const t = [2, 3, 4];
const a = t[0];
const b = t[1];
const c = t[2];

const [x, y, z] = t;
console.log(x, y, z); // 2 3 4 - it is destructuring example

const [first, second] = restaurant.categories;
console.log(first, second);
let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//write function to order
const mainCourse = restaurant.order(1, 0);
console.log(mainCourse);

const nested = [2, 4, [5, 6]];
const [k, , m] = nested;
console.log(m);
console.log(m[1]);
//destructuring
const [g, , [j, f]] = nested;
console.log(j, f);

//destructuring objects

const {name, categories, openingHours} = restaurant;
console.log(openingHours);

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

//mutating variables
let a1 = 111;
let b2 = 222;
const obj = {a1: 23, b2: 7, c: 15};

({a1,b2}=obj);
console.log(a1,b2);

//nested objects

const{fri:{open:o, close:u}} = restaurant.openingHours;
console.log(o,c,'text');


