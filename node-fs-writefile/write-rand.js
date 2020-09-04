/* eslint-disable no-console */
const fs = require('fs');
const number = Math.random();

const data = new Uint8Array(Buffer.from(`console.log(${number})`));
fs.writeFile('random.txt', data, err => {
  if (err) throw err;

});
