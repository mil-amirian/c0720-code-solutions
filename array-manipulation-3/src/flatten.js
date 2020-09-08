/* eslint-disable no-unused-vars */
const flatten = array => {
  const flat = [].concat.apply([], array);
  return flat;
};
