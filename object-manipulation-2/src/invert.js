/* eslint-disable no-unused-vars */
const invert = source => {
  const invertedObj = {};
  const keys = Object.keys(source);
  const property = Object.values(source);
  for (let i = 0; i < keys.length; i++) {
    invertedObj[property[i]] = keys[i];
  }
  return invertedObj;
};
