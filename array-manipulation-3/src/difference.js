/* eslint-disable no-unused-vars */
const difference = (first, second) => {
  const common = [];
  const result = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        common.push(first[i]);
      }
    }
  }
  if (common.length < 2) {
    for (let i = 0; i < first.length; i++) {
      if (common[0] !== first[i]) {
        result.push(first[i]);
      }
    }
    for (let i = 0; i < second.length; i++) {
      if (common[0] !== second[i]) {
        result.push(second[i]);
      }
    }
  } else {
    for (let i = 0; i < first.length; i++) {
      if (common[0] !== first[i] && common[0] !== second[i]) {
        result.push(first[i]);
      }
    }
    for (let i = 0; i < second.length; i++) {
      if (common[1] !== first[i] && common[1] !== second[i]) {
        result.push(second[i]);
      }
    }
  }
  return result;
};
