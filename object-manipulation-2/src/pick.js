/* eslint-disable no-unused-vars */
const pick = (source, keys) => {
  const resultObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      resultObj[keys[i]] = source[keys[i]];
    }
  }
  return resultObj;
};
