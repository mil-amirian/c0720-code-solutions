/* eslint-disable no-unused-vars */
const omit = (source, keys) => {
  const resultObj = {};
  Object.assign(resultObj, source);
  for (let i = 0; i < keys.length; i++) {
    const currentIndex = keys[i];
    if (resultObj[currentIndex]) {
      delete resultObj[currentIndex];
    }
  }
  return resultObj;
};
