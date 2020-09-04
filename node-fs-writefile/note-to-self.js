/* eslint-disable no-console */

const fs = require('fs');
const message = process.argv[2];

const data = new Uint8Array(Buffer.from(`console.log('${message}')`));
fs.writeFile('note.txt', data, err => {
  if (err) throw err;

});
