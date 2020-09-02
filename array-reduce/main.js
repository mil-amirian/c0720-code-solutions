/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = (number, currentValue) => number + currentValue;
console.log(numbers.reduce(sum));

const product = (number, currentValue) => number * currentValue;
console.log(numbers.reduce(product));

const initialValue = 0;

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

const accountTrans = groupBy(account, 'type');

const calcs = (number, currentValue) => number + currentValue.amount;
const deposit = accountTrans.deposit.reduce((calcs), initialValue);
const withdrawal = accountTrans.withdrawal.reduce((calcs), initialValue);
const accountBalance = deposit - withdrawal;
console.log(accountBalance);

const composite = traits.reduce((composite, traits) => {
  return Object.assign(composite, traits);
}, {});
console.log(composite);
