/* eslint-disable no-unused-vars */
const titleCase = string => {
  const splitStringArr = string.split(' ');
  const result = [];
  let finalSentence = '';
  for (let i = 0; i < splitStringArr.length; i++) {
    if (splitStringArr[i].length > 3 || splitStringArr[i] === 'web' || splitStringArr[0] === 'the' || splitStringArr[i - 1] === 'javascript:' || splitStringArr[i - 1] === 'Javascript:') {
      if (splitStringArr[i] === 'javascript' || splitStringArr[i] === 'Javascript') {
        result.push('JavaScript');
      } else if (splitStringArr[i] === 'javascript:' || splitStringArr[i] === 'Javascript:') {
        result.push('JavaScript:');

      } else if (splitStringArr[i].includes('-')) {
        const miniSplit = splitStringArr[i].split('-');
        const updatedMiniSplit = [];
        miniSplit.forEach(word => {
          updatedMiniSplit.push(word.charAt(0).toUpperCase() + word.slice(1));
        });
        const updatedFinal = updatedMiniSplit.join('-');
        result.push(updatedFinal);
      } else if (splitStringArr[i - 1] === 'javascript:' || splitStringArr[i - 1] === 'Javascript:') {
        result.push(splitStringArr[i].charAt(0).toUpperCase() + splitStringArr[i].slice(1));
      } else {
        result.push(splitStringArr[i].charAt(0).toUpperCase() + splitStringArr[i].slice(1));
      }
    } else if (splitStringArr[i] === 'api') {
      result.push('API');
    } else {
      result.push(splitStringArr[i]);
    }
  }
  finalSentence = result.join(' ');
  return finalSentence;
};
