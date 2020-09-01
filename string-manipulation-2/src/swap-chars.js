/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  const newArr = [];
  for (let i = 0; i < string.length; i++) {
    newArr.push(string[i]);
  }
  const temp = newArr[firstIndex];
  newArr[firstIndex] = newArr[secondIndex];
  newArr[secondIndex] = temp;

  return newArr.join('');
}
