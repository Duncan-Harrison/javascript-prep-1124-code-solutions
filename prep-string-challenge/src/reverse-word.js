/* exported reverseWord */
function reverseWord(word) {
  const str = word;
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
/* function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion', i);
  }
}
forLoop2(); */
