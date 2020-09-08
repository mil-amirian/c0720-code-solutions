/* eslint-disable no-unused-vars */
const union = (array, second) => {
  const result = [...new Set(array), ...new Set(second)];
  return [...new Set(result)];
};
