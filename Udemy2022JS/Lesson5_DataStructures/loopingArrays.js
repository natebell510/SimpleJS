'use strict'


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be
        delivered to ${address} at ${time}`);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2},${ing3} `);
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for of loop
for (const item of menu) {
    console.log(item);
}
for (const [i, el] of menu.entries()) {//destructuring
    console.log(`${i + 1} : ${el} `);
}
//console.log(menu.entries());//Object [Array Iterator] {}

//Enhanced object literal

//optional chaining
console.log(restaurant.openingHours.mon?.open); //undefined
//property exists if it is not null or undefined

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekdays) {

    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`on ${day} we are open at ${open}`);
}

// Methods
const users = [
    {
        name: 'User name',
        age: 14,
        email: 'aaa@core.con'
    }
];
console.log(users[1]?.name ?? 'User array is empty');//User array is empty

for (const day of Object.keys(restaurant.openingHours)) {
    console.log(day);
}

const properties = Object.keys(restaurant.openingHours);
console.log(properties); //[ 'thu', 'fri', 'sat' ]

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
entries.forEach(x => console.log(x));

for (const [key, {open, close}] of entries) {
    console.log(`We are open on ${key} between ${open} and ${close}`)
}

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
 and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

for (let i = 0; i < game.scored.length; i++) {
    console.log(`Goal ${[i + 1]}: ${game.scored[i]}`);
}
const odds = Object.values(game.odds);
const avg = function (odds) {
    let sum = 0;
    for (const odd of odds) {
        sum += odd;
    }
    return sum / odds.length;
};
console.log(avg(odds));

//SETS - collection of unique values
const orders = new Set([
    'pasta',
    'pizza'
    , 'pizza',
    'rizotto',
    'pizza',
    'pasta']);
console.log(orders);//Set(3) { 'pasta', 'pizza', 'rizotto' }
console.log(new Set('JOnas'));
//size of Set
orders.size > 3 ? console.log('size is bigger than 3') : console.log('size is smaller or 0');
console.log(orders.has('pizza'));//true
orders.add('bread');
console.log(orders.has('bread'));
orders.delete('rizotto');
let bool = orders.has('rizotto') ? 100 : 999;
console.log(bool);
//iterate Set
for (const order of orders) {
    console.log(order);
}
console.log('-**********************');
const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];
const unique = [...new Set(staff)];
console.log(unique); //[ 'waiter', 'chef', 'manager' ]

const name = 'Nazarii';
console.log(new Set(name).size);

//Map data structure in key/value pairs
const data = new Map();
data.set(1, 'notebook');
data.set(2, 'pen');
data.set('name', 'Nazar');
console.log(data);//Map(3) { 1 => 'notebook', 2 => 'pen', 'name' => 'Nazar' }

console.log(data.get('name') === 'London' ? true : 'tool');
data.set('phones',['iphone','android']);
console.log(data);
console.log(data.size);
//data.clear();
console.log(data.size);
const arr = [1,2];
data.set(arr,'test');
console.log(data.get(arr));//test

//data.set(document.querySelector('h1'),'Heading');

// Maps: Iteration
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);

// Convert object to map
//console.log(Object.entries(openingHours));
//const hoursMap = new Map(Object.entries(openingHours));
//console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
console.log('-*-*-*-*-*-*-**-');
const events = [...new Set(gameEvents.values())];
console.log(events);

//remove yellow card from minute 64
gameEvents.delete(64);


//


const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, every ${time/gameEvents.size} minutes.`)
for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST':'SECOND';
    console.log(`[${half} HALF] ${min} : ${event}`);
}






