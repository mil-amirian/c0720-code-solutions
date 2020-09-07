/* eslint-disable no-unused-vars */
const reverseWords = string => {
  const strArr = string.split(' ');
  let reversedStr = '';
  let result = '';
  strArr.forEach(word => {
    for (let i = word.length - 1; i >= 0; i--) {
      reversedStr += word[i];
    }
    reversedStr += ' ';
  });

  for (let i = 0; i < reversedStr.length - 1; i++) {
    result += reversedStr[i];
  }
  return result;
};
