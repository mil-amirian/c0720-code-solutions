/* eslint-disable no-unused-vars */
function take(array, count) {
  const newArr = [];
  if (array.length > 1) {
    for (let i = 0; i < count; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  } else {
    return newArr;
  }
}
