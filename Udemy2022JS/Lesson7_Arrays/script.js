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

const displayMovements = function (movements, sort = false) {
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

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (account) {
    account.balance = account.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${account.balance}€`;
};




const calcDisplaySummary = function (account) {
    //in
    const incomes = account.movements.filter(move => move > 0).reduce((acc, move)=> acc + move, 0);
    labelSumIn.textContent = `${incomes}€`;
    //out
    const out = account.movements.filter(move => move < 0).reduce((acc, move)=> acc + move, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`; //remove minus sign
    //const %
    const interest = account.movements.filter(move => move > 0)
        .map(deposit => (deposit * account.interestRate)/100)
        .filter((int, i,arr) => {
            return int >= 1;
        })
        .reduce((acc, interest)=> acc + interest,0);
    labelSumInterest.textContent = `${Math.round(interest)}€`;
}

//interest is 1.2%

//do not overuse chaining, because can cause performance issues, compress functionality


//FIND method
//returns first element that satisfies the condition
const firstEl = movements.find(move => move < 0);

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);



//adding login, opacity
const updateUI = function (account){
    //display movements
    displayMovements(account.movements);
    //balance
    calcDisplayBalance(account);
    //summary
    calcDisplaySummary(account);
}

let currentAccount;
//event handler
btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    currentAccount = accounts.find( acc => acc.username === inputLoginUsername.value);

    if(currentAccount?.pin === Number(inputLoginPin.value)){
        //display UI and welcome message
       labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
       containerApp.style.opacity = 100;

       //clear input fields
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
        inputLoginPin.blur();
        updateUI(currentAccount);
    }else{
        labelWelcome.textContent = 'Wrong credentials!';
    }
});

//transfer money from one user to another
btnTransfer.addEventListener('click', function (e) {
    //prevent default behavior to reload page
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';
    if( receiverAccount
        &&amount > 0
        && currentAccount.balance >= amount
        &&receiverAccount?.username !== currentAccount.username){
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);

        //update UI
        updateUI(currentAccount);
    }

});

btnLoan.addEventListener('click', function (e) {
    e.preventDefault();

    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

//findIndex method //close account
btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        //delete account
        accounts.splice(index,1);
        //hide UI
        containerApp.style.opacity = 0;


    }
    //clear fields
    inputCloseUsername.value = inputClosePin.value = '';
});

//SORT button
let sorted = false;

btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
//click again it returns to default state which is random
const y = [1,2,3,4,5,6,7];
const x = new Array(7);
x.fill(12,0,4);
x.fill(9,4,7);

const t = Array.from({length : 7}, () => 166); //[166, 166, 166, 166, 166, 166, 166]
const z = Array.from({length : 7}, (_, i) => i +1); //[1, 2, 3, 4, 5, 6, 7]

const ran = Math.floor(Math.random() * 100);



labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value')
        ,el => el.textContent.replace('€',''));
    //console.log(movementsUI);
});





//
//console.log(movements.includes(-200)); //used for equality

//some returns boolean, CONDITION
//const anyDeposits = movements.some(move => move > 5000);
//console.log(anyDeposits);
//check if every transaction is deposit
//console.log(account4.movements.every(move => move > 0));


//separate callback
//const deposit = mov => mov > 0;
//console.log(movements.some(deposit));
//console.log(movements.filter(deposit));
//Do not Repeat Yourself


//FLAT and FLATMAP

//const nestedArr = [[1,2,3],[1,2,5],89,10];
//console.log(nestedArr.flat());//[1, 2, 3, 1, 2, 5, 89, 10]

//const deeperArr = [[1,2,3],[1,2,5],[89,10,[11,12]]];
//console.log(deeperArr.flat(2));//[1, 2, 3, 1, 2, 5, 89, 10, 11, 12]

//const overAll = accounts.map(acc => acc.movements).flat()
 //   .reduce((acc, move) => acc + move, 0);
//console.log(overAll);

//flatMap
/*
const overAll = accounts
    .flatMap(acc => acc.movements)
    .reduce((acc, move) => acc + move, 0);
console.log(overAll);
 */


//SORTING of arrays, sort is based on String in JS
/*
const owners = ['Jonas', 'Zack','Adam','Ada','Andrew','Martha'];
console.log(owners.sort());
console.log(movements.sort((a,b) => {
    if(a > b){
        return 1; //switch order
    }
    // 1 and -1, ASC && -1 and 1 DESC
    if(b > a){
        return -1; //keep order
    }
}));//[-650, -400, -130, 70, 200, 450, 1300, 3000]
 */















/*
const reworkedCalcAverageAge = ages =>
    ages.map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, age, i, arr) => acc + age / arr.length, 0);


const a1 = [5, 2, 4, 1, 15, 8, 3];
const a = reworkedCalcAverageAge(a1);
console.log(a);
 */







/*

//00:58 part 18
//https://www.youtube.com/watch?v=dRFqF3ore78&list=PLd7dW_Jxkr_Yw6apt7tpzDC6X2mP5UhtQ&index=18

const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);
    dogs.forEach(function (dog, i) {
        if (dog >= 3) {
            console.log(`Dog number ${i + 1} is an adult and ${dog} years old.`);
        } else {
            console.log(`Dog number ${i + 1} is a puppy and ${dog} years old.`);
        }
    });
};
checkDogs([3, 4, 5, 6, 7], [4, 1, 15, 8, 3]);

//Data transformation - Map, Filter, Reduce
//Map is method to loop over array, map creates new array based of original array

const test = [1, 3, 4, 5, 6];
const newTest = test.map(x => x * 3);
console.log(newTest);
const filtered = test.filter(x => x < 3); //returns new array with specified elements
console.log(filtered);
const reduced = test.reduce(x => x + 10);
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

const moveDesc = movements.map((move, i) =>

    `Movement ${i + 1}: You ${move > 0 ? 'deposited' : 'withdrew'} ${Math.abs(move)}`);

console.log(moveDesc);
const obj = {
    name: 'Nazar',
    balance: 2456.001
};

const user = `Steven Thomas Williams`;
const username = user.toLowerCase().split(' ').map(x => x[0]);
console.log(username);

const createUserInitials = function (accounts) {
    accounts.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });

};
//map creates new array
createUserInitials(accounts);
console.log(accounts);

//FILTER
const deposits = movements.filter(function (mov) {
    return mov > 0;
});
console.log(`you have ${deposits.length} deposits of ${[...deposits]}`);

const withdrawals = movements.filter(function (move) {
    return move < 0;
})
console.log(...withdrawals);

//REDUCE

const balance = movements.reduce(function (acc, cur, i, arr) {
    console.log(`Iteration #${i} is ${acc}`)
    return acc + cur;
}, 0);



let balance2 = 0;
for (const move of movements) {
    balance2 += move;
}
console.log(balance2);
console.log('-**-*-*-*-*-*-*-**-');
//maximum value of movements array
const maxValue = movements.reduce((acc, move) => {
    if (acc > move) {
        return acc;
    } else {
        return move;
    }
}, movements[0]);
console.log(maxValue);


 */


/*
//convert age of a dog to human and calcAverageHumanAge([age])

//if age <=2 humanAge = age*2
//if age>2 humanAge = 16 + dogAge *4

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);

    return adults.reduce((acc, age) => acc + age, 0) / adults.length;
};
const a1 = [5, 2, 4, 1, 15, 8, 3];
const a = calcAverageHumanAge(a1);
console.log(a);
 */







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









