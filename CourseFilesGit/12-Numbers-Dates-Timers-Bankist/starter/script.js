'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-03T14:11:59.604Z',
    '2023-03-05T17:01:17.194Z',
    '2023-03-06T23:36:17.929Z',
    '2023-03-07T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const formatMovementDate = function(date, locale){
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1))/(1000 * 60 * 60 *24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if(daysPassed === 0){
    return 'Today'
  }
  if(daysPassed === 1) return 'Yesterday'
  if(daysPassed <= 7) return `${daysPassed} days ago`

    /*
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${day}/${month}/${year}`;
     */
  return  new Intl.DateTimeFormat(locale).format(date);

};

//format currency
const formatCurr = function(value, locale, currency){
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency : currency
  }).format(value);
};


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMovement = formatCurr(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurr(acc.balance, acc.locale, acc.currency);
  //labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurr(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurr(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurr(interest, acc.locale, acc.currency);
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};


const startLogOutTimer = function (){

  function tick(){
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = String(time % 60).padStart(2, 0);
    //call timer every second

    //in each callback call print remaining time to UI
    labelTimer.textContent = `${min}:${seconds}`;

    //when time is 0 logout
    if(time === 0){
      clearInterval(timer);
      labelWelcome.textContent = 'Login to get started.';
      containerApp.style.opacity = 0;
    }
    //decrease one sec
    time = time - 1; //time--;

  }

  //set time to 5 minutes
  let time = 300;

  //cal timer
  tick();
  const timer = setInterval(tick ,1000);

  return timer;


};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//fake always logged in
/*
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
 */

//Internationalization API
/*
const now = new Date();
const options = {
  hour : 'numeric',
  minute : 'numeric',
  day : 'numeric',
  month : 'long',
  year : 'numeric',
  weekday : 'long'
};

const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat('uk-UA', options).format(now);
 */




const currentDate = new Date();
//labelDate.textContent = currentDate.toString();
//day,month,year
const day = `${currentDate.getDate()}`.padStart(2, 0);
const month = `${currentDate.getMonth() + 1}`.padStart(2,0);
const year= currentDate.getFullYear();
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
//labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;



    //create current date and time
    //const currentDate = new Date();
    //labelDate.textContent = currentDate.toString();
    //day,month,year
    /*
    const day = `${currentDate.getDate()}`.padStart(2, 0);
    const month = `${currentDate.getMonth() + 1}`.padStart(2,0);
    const year= currentDate.getFullYear();
    const hour = `${currentDate.getHours()}`.padStart(2, 0);
    const minutes = `${currentDate.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minutes}`;
     */
    const now = new Date();
    const options = {
      hour : 'numeric',
      minute : 'numeric',
      day : 'numeric',
      month : 'numeric',
      year : 'numeric',
      //weekday : 'long'
    };

    //const locale = navigator.language;

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);


    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //add timer
    if(timer)clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function (){
      // Add movement
      currentAccount.movements.push(amount);


      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());


      // Update UI
      updateUI(currentAccount);
    }, 3000);



  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(Number('23'));
//type coercion
console.log(+'23');
//Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('px30'));//NaN
console.log(Number.parseInt('2.5rem'));//2
console.log(Number.parseFloat('2.5rem'));//2.5
//NaN
console.log(Number.isNaN('20'));//false

//check if value is Number
console.log(Number.isFinite(23/0));//false
console.log(Number.isFinite(23));//true

console.log(Number.isInteger(23.0));//true
console.log(Number.isInteger(23.0)/0);//Infinity
//square root
console.log(Math.sqrt(144));
console.log(25 ** (1/2));//5
//cubic root
console.log(8 ** (1/3));//2
//max
console.log(Math.max(12,25,369));//369
console.log(Math.min(12,25,369));//12
//radius of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793
console.log(Math.trunc(Math.random() * 6) + 1);//random

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
console.log(randomInt(15,125));
console.log('rounding integers');
//rounding integers
console.log(Math.trunc(23.3));//23
console.log(Math.round(23.9));//24
console.log(Math.ceil(23.9));//24
console.log(Math.ceil(23.3));//24

console.log('trunc');
console.log(Math.floor(23.3));//23
console.log(Math.floor(23.9));//23
console.log('rounding decimals');
console.log((2.7).toFixed(0));//String 3
console.log((2.7).toFixed(5));//2.70000
console.log(+(2.7).toFixed(2));//Number 2.7

//Remainder operator
console.log(5 % 2); //5 - (2*2) =  1
console.log(12 % 5); //12 - (5*2) = 2
console.log(18 % 5);//18 - (5*3) = 3

const isEven = n => n % 2 === 0;
console.log(isEven(44));
 */

labelBalance.addEventListener('click', function (){
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i){
    //0,2,4,6
    if(i % 2 === 0){
      row.style.backgroundColor = 'orangered';
    }
    //0,3,6,9
    if(i % 3 === 0 ){
      row.style.backgroundColor = 'blue';
    }
  });

});

//starting from ES2021 - numeric separator
//const diameter = 287_460_000_000;
//console.log(diameter);

//64 bits (1 and 0) to store a number - 53 store number, rest is to save position.
//console.log(Number.MAX_SAFE_INTEGER);//9_007_199_254_740_991

//BigInt
//console.log(464654645465454545345845453435435453n);//464654645465454545345845453435435453n
//console.log(BigInt(464654645465454545345845453435435453));//464654645465454564081394255652716544n

//console.log(23 * 51651561351351351351352135135n);
//Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions

//Create a date
//const now = new Date();
//console.log(now);
//console.log(new Date('Aug 02 2022 18:06:44'));

//
//console.log(account1.movementsDates[0]);
//console.log(new Date(2031,11,19,15,23,55));//Fri Dec 19 2031 15:23:55 GMT-0700 (Mountain Standard Time)

//console.log(new Date(2023,5,32));//Sun Jul 02 2023 00:00:00 GMT-0600 (Mountain Daylight Time)

//console.log(new Date(0));//Wed Dec 31 1969 17:00:00 GMT-0700 (Mountain Standard Time)

//Working with Dates
/*
const future = new Date(2037,1,12,3,6,14);
console.log(future.getFullYear());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.toISOString());//2037-02-12T10:06:14.000Z
console.log(future.getTime());//2118045974000
console.log(future.setFullYear(2023));
 */




//1:40:00
/*
//date difference
const future = new Date(2037,5,1);
console.log(+future);
const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date2 - date1))/(1000 * 60 * 60 *24));
const days1 = calcDaysPassed(new Date(2037,6,14), new Date(2037,6,10,10,8));
console.log(days1);
 */


//2:13:05
//unit, percent or currency
/*
const num = 308888.23;
const options1 = {
  style : 'currency',
  currency : 'USD',
  useGrouping : true
};

console.log(new Intl.NumberFormat('da-DK', options1).format(num));//38,888.23
console.log(navigator.language, new Intl.NumberFormat(navigator.language, options1).format(num));//en-US 308,888.23
 */

//Timers

/*
const ingredients = ['olives', 'spinach', 'cheese'];

const pizzaTimer = setTimeout((ing1, _ ,ing3) => console.log(`Here is your pizza with ${ing1} and ${ing3}`),
    5000,
    ...ingredients);
console.log('Wait...');
if(!ingredients.includes('spinach')){
  clearTimeout(pizzaTimer);
}
 */

/*
setInterval(function (){
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds().toFixed(2);


  console.log(`${hours}:${minutes}:${seconds}`);
},1000);
 */






