/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  let wordCheck = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) wordCheck += word[i];
  }
  if (word === wordCheck) {
    return true;
  } else {
    return false;
  }
}
