/* exported capitalize */
function capitalize(word) {
  /* let k = word.replace(word[0], word[0].toUpperCase());
  return k; */
  /* return word.replace(word[0], word[0].toUpperCase()); */
  let mostLetters = word.toLowerCase();
  let result = mostLetters[0].toUpperCase() + mostLetters.slice(1);
  return result;
}
