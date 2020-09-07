/* eslint-disable no-unused-vars */
const isAnagram = (firstString, secondString) => {
  let matchCount = 0;
  for (let i = 0; i < secondString.length; i++) {
    if (firstString.includes(secondString[i])) {
      matchCount++;
    }
  }
  if (matchCount === firstString.length) {
    return true;
  } else {
    return false;
  }
};
