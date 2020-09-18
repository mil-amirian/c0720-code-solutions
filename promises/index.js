/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const output = takeAChance('Mil');

output.then(value => {
  console.log(value);
});

output.catch(error => {
  console.log(error.message);
});
