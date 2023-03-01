'use strict'


//Coding challenge

//eating too much or too little, ok amount is within range of 10% above and below

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little
 is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended
portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to
the object as a new property. Do NOT create a new array, simply loop over the array.
 Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple
 owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners
of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!"
 and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind
 that the portions are inside the array's objects)

HINT 1: Use many tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/


const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']}
];


//1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to
// the object as a new property. Do NOT create a new array, simply loop over the array.
//  Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach(dog => dog.recommendedFood = dog.weight * 0.75 * 28);


//2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple
//  owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const tooMuch = 'Sarah dog eating too much.';
const tooLittle = 'Sarah dog eating too little';

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahDog.curFood > sarahDog.recommendedFood) {
    console.log(tooMuch);
} else {
    console.log(tooLittle);
}


// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners
// of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);


// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!"
//  and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
dogs.forEach(dog => dog.curFood === dog.recommendedFood ? console.log(dog.owners + ' ' + true) : console.log(dog.owners + ' ' + false));
console.log('with some method')
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));


// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

dogs.forEach(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10) ? console.log(true) : console.log(false));
console.log('with some method check eating okay');
console.log(dogs.some(dog =>  dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)));
const checkEatingOkay = dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10);
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const okayDogs = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10));
console.log(okayDogs);
console.log('*-S*-*O-*-R*-*T-*-E*-*D-*-*-**-')
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind
//  that the portions are inside the array's objects)
const copy = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(copy);



/*
to mutate original array:
- push
- unshift
- remove: pop (end), shift(start), splice(any)
- reverse, sort, fill(value, start, end)

NEW ARRAY:
 - map
 - filter
 - slice
 - concat
 - flat
 - flatMap

 Array Index
 - indexOf
 - findIndex
 - find

 If array includes:
 - includes
 - some - condition based on function - return one element satisfies condition
 - every - all elements that satisfy condition

 Array to String: join

 Array to One value : reduce

Loop over array: forEach


 */
