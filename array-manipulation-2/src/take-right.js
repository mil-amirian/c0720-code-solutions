/* eslint-disable no-unused-vars */
function takeRight(array, count) {
  const newArr = [];
  if (array.length > 0) {
    for (let i = array.length - count; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  } else {
    return array;
  }

}
