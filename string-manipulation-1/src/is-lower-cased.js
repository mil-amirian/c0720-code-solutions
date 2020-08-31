/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  let wordCheck = '';
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) wordCheck += word[i];
  }
  if (word === wordCheck) {
    return true;
  } else {
    return false;
  }
}
