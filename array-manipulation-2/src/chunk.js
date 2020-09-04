/* eslint-disable no-unused-vars */
function chunk(array, size) {

  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    const currentChunk = array.slice(i, i + size);
    chunkedArr.push(currentChunk);
  }
  return chunkedArr;

}
