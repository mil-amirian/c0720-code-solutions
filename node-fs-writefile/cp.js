/* eslint-disable no-console */

const fs = require('fs');
const newFileName = process.argv[3];

fs.readFile(process.argv[2], 'utf8', (err, info) => {
  if (err) throw err;
  const copy = new Uint8Array(Buffer.from(info));
  fs.writeFile(newFileName, copy, err => {
    if (err) throw err;
  });
});
