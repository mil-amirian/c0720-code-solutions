/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  const correctedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (correctedWord === 'Javascript') return 'JavaScript';
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
