const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freentryancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  //if (!user) user = 'jonas';
  user = user.toLowerCase();

  /*
  let lim;
  if (limits[user]) {
    lim = limits[user];
  }
  lim = 0;
   */
  const limit = getLimit(user);
  const limit2 = spendingLimits?.[user] ?? 0;

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpenses = function () {
  for (const entry of budget) {
    /*
    let lim;
    if (limits[entry.user]) {
      lim = limits[entry.user];
    } else {
      lim = 0;
    }
     */
   // const limit2 = getLimit(entry.user);

    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / `:''
    /*
    if (entry.value <= -bigLimit) {
      output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
    }
     */
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};


//imperative vs declarative code

// explain each step to computer , how to do vs what to do

//functional programming - declarative, pure functions, avoiding side effects and mutating data

//immutability - state or data is never modified, instead is copied and copy is mutated and returned

// syntax: use spread operator, array and object destructuring, ternary operator, template literals

//https://www.youtube.com/watch?v=V-TRtQDfySc&list=PLEcZUKhPzlA2ZcVaNJdbWqzuJPIKGbeVA&index=7&ab_channel=ViralKingz