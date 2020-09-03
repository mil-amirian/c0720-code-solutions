/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

if (process.argv[3] === 'plus') {
  const first = process.argv[2];
  const second = process.argv[4];
  console.log('result is', add(parseInt(first), parseInt(second)));
} else if (process.argv[3] === 'minus') {
  const first = process.argv[2];
  const second = process.argv[4];
  console.log('result is', subtract(parseInt(first), parseInt(second)));
} else if (process.argv[3] === 'times') {
  const first = process.argv[2];
  const second = process.argv[4];
  console.log('result is', multiply(parseInt(first), parseInt(second)));
} else if (process.argv[3] === 'over') {
  const first = process.argv[2];
  const second = process.argv[4];
  console.log('result is', divide(parseInt(first), parseInt(second)));
}
