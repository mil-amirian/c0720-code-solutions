/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  const targetKeys = Object.keys(target);
  const sourceKeys = Object.keys(source);
  for (let i = 0; i < sourceKeys.length; i++) {
    if (sourceKeys[i] !== targetKeys[i]) {
      target[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return target;
};
