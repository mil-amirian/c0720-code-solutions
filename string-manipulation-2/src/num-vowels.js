/* eslint-disable no-unused-vars */
function numVowels(string) {
  let vowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === 'a' ||
            string[i] === 'A' ||
            string[i] === 'i' ||
            string[i] === 'I' ||
            string[i] === 'o' ||
            string[i] === 'O' ||
            string[i] === 'e' ||
            string[i] === 'E' ||
            string[i] === 'u' ||
            string[i] === 'U'
    ) {
      vowels++;
    }
  }
  return vowels;
}
