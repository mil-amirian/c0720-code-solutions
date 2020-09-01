/* eslint-disable no-unused-vars */
function ransomCase(string) {
  let result = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();

    } else if (i % 2 !== 0) {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
