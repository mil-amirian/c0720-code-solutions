/* eslint-disable no-unused-vars */
const zip = (first, second) => {
  const result = [];
  for (let i = 0; i < first.length; i++) {
    if (first[i] && second[i]) {
      result.push([first[i], second[i]]);
    }
  }
  return (result);
};
