/* eslint-disable no-unused-vars */
const intersection = (first, second) => {
  const common = [];
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        common.push(first[i]);
      }
    }
  }
  return common;
};
