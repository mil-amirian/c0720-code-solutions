/* eslint-disable no-unused-vars */
function chunk(array, size) {
  const copyArr = [];
  const secondArr = [];
  // finalArr = [];

  let i = 0;
  for (; i < array.length; i++) {
    for (let j = 0; j < size; j++) {
      copyArr.push(array[j]);
      i += size;
      secondArr.push(copyArr);
    }
  }

  // for (let j = 0; j < size; j++) {
  //   secondArr.push(copyArr[j]);
  // }

  // console.log(secondArr);

}
