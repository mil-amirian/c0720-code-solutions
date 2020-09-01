/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  let result = '';
  if (length < string.length) {
    for (let i = (string.length - length); i < string.length; i++) {
      result += string[i];
    }
  } else if (length > string.length) {
    return string;
  }

  return result;
}
