'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const displayMovements = function(movements, sort = false){
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
            i + 1
        } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML
        ('afterbegin', html);
    });
};

displayMovements(account1.movements);




//00:58 part 18
//https://www.youtube.com/watch?v=dRFqF3ore78&list=PLd7dW_Jxkr_Yw6apt7tpzDC6X2mP5UhtQ&index=18

const checkDogs = function (dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function (dog,i){
        if(dog >= 3){
            console.log(`Dog number ${i + 1} is an adult and ${dog} years old.`);
        }else{
            console.log(`Dog number ${i + 1} is a puppy and ${dog} years old.`);
        }
    });
};
checkDogs([3,4,5,6,7],[4,1,15,8,3]);

//Data transformation - Map, Filter, Reduce
//Map is method to loop over array, map creates new array based of original array

const test = [1,3,4,5,6];
const newTest = test.map(x => x * 3);
console.log(newTest);
const filtered = test.filter(x => x<3); //returns new array with specified elements
console.log(filtered);
const reduced = test.reduce( x => x + 10);
console.log(reduced);

console.log('***-*-*-*-*-*-*-*-*-*-*-*-*-*-');
console.log(account1.movements);
const eurToUsd = 1.1;
const euros = movements.map(x => Math.trunc(x * eurToUsd));
console.log(euros);

const movementsUSD = movements.map(function (move) {
    return Math.round(move * eurToUsd);
});
console.log(movementsUSD);

const moveDesc = movements.map((move,i) =>

    `Movement ${i +1}: You ${move > 0 ? 'deposited':'withdrew'} ${Math.abs(move)}`);

console.log(moveDesc);
const obj = {
    name: 'Nazar',
    balance : 2456.001
};

const user = `Steven Thomas Williams`;
const username = user.toLowerCase().split(' ').map(x => x[0]);
console.log(username);

const createUserInitials = function (accounts){
   accounts.forEach(function(acc){
       acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
   });

};
//map creates new array
createUserInitials(accounts);
console.log(accounts);

//FILTER
const deposits = movements.filter(function(mov){
    return mov > 0;
});
console.log(`you have ${deposits.length} deposits of ${[...deposits]}`);

const withdrawals = movements.filter(function(move){
    return move < 0;
})
console.log(...withdrawals);


















/*
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

console.log([...arr]);
//create shallow copy

//SPLICE - changes original array, mutates
//console.log(arr.splice(1,3));

console.log(arr.splice(-1));
//MDN splice - JS library

arr.splice(1, 2);
console.log(arr);

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());//reverse method mutates array
console.log(arr2);

//concat method - to concatenate two arrays
const letters = arr.concat(arr2);
console.log(letters);

console.log([...arr, ...arr2]); //
//JOIN method

console.log(arr.join('-')); // result is string a-b-c-d-e
//ES2022 at method

const dummyArr = [23, 11, 64];
console.log(dummyArr[0]);
console.log(dummyArr.at(0));
//
console.log(dummyArr.at(dummyArr.length - 1)); //64
console.log(dummyArr.slice(-1));//[64]
console.log(dummyArr.at(-1));//64
//at method used with String
const word = 'JJJonas';
console.log(word.at(4));

//
for (const [i,movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i+1}:You deposited ${movement}`)
    } else {
        console.log(`Movement ${i+1}:You withdrew ${movement}`)
    }
}
console.log('FOREACH');
//continue and break do not work in ForEach loop
movements.forEach(function (movement,index, array){
    if (movement > 0) {
        console.log(`Movement ${index+1}:You deposited ${movement}`)
    } else {
        console.log(`Movement ${index+1}:You withdrew ${movement}`)
    }
});

//forEach with  Map and Set

currencies.forEach( function(value, key,map){
    console.log(`${key}:${value}`)
});
const currenciesUnique = new Set(['USD','GBP','USD','EUR']);
console.log(currenciesUnique);
//Set does not have indexes
currenciesUnique.forEach(function (value, _, map){
    console.log(`${value}:${value}`)
});

 */









