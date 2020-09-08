/* eslint-disable no-unused-vars */
const isPalindromic = string => {
  let reversed = '';
  let original = '';
  for (let j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      original += string[j];
    }
  }
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reversed += string[i];
    }
  }
  if (reversed === original) {
    return true;
  } else {
    return false;
  }
};
