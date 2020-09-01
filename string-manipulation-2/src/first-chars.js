/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  let result = '';
  if (string.length > length) {
    for (var i = 0; i < length; i++) {
      result += string[i];
    }
  } else if (string.length < length) {
    return string;
  }
  return result;
}
