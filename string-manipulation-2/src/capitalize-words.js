/* eslint-disable no-unused-vars */
function capitalizeWords(string) {

  string = string.split(' ');
  for (let i = 0; i < string.length; i++) {

    string[i] = string[i][0].toUpperCase() + string[i].slice(1).toLowerCase();
  }
  return string.join(' ');
}
