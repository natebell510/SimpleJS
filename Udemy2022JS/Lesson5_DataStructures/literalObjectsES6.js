// noinspection JSAnnotator

'use strict'


const hours =  {
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
};


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
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
    //ES6 object literals
    hours
    };

if(restaurant.openingHours && restaurant.hours.mon)console.log(restaurant.openingHours.hours.mon);

//with optional chaining
//console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.hours?.mon?.open);

const days = ['mon','tue','wed','thu','fri'];
for(const day of days){

    const open = restaurant.hours[day]?.open||'closed';
    console.log(`on ${day} we open at ${open}`);
}

console.log(restaurant.order?.(0,1)??'Method exist');
console.log(restaurant.orderRissot?.(0,1)??'Method does not exist');

const user = [

];
console.log(user[0]?.name??'User array is empty');
