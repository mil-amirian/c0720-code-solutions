/* eslint-disable no-unused-vars */
function truncate(length, string) {
  let result = '';
  if (string && string.length >= length) {
    for (let i = 0; i < length; i++) {
      result += string[i];
    }
  } else {
    result += string;
  }

  return result + '...';
}
