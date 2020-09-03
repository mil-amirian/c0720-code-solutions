/* eslint-disable no-console */
let currentCount = 3;
const blastOff = setInterval(function () {
  if (currentCount > 0) {
    console.log(currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast Off!');
    clearInterval(blastOff);
  }
}, 1000);
