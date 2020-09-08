/* eslint-disable no-unused-vars */
const equal = (first, second) => {
  let correctCounter = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) correctCounter++;
  }

  if (first.length === correctCounter) {
    return true;
  } else {
    return false;
  }
};
