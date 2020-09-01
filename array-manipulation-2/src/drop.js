/* eslint-disable no-unused-vars */
function drop(array, count) {
  const newArr = [];
  if (array.length >= 1) {
    for (let i = count; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  } else {
    return array;
  }

}
