/* eslint-disable no-unused-vars */
function getValues(object) {
  const result = [];
  for (const value in object) {
    result.push(object[value]);
  }
  return result;
}
