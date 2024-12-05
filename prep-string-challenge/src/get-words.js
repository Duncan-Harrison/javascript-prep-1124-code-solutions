/* exported getWords */
function getWords(string) {
  const words = [];
  let stringArray = string.split(' ');
  for (i = 0; i < stringArray.length; i++) {
    words.push(stringArray[i]);
  }
  return words;
}

/*  const words = string.split(' ');
  return words; */
