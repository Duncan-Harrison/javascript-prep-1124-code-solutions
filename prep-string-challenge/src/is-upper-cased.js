/* exported isUpperCased */
function isUpperCased(word) {
  let CAPS = word.toUpperCase();
  if (word === CAPS) {
    return true;
  } else {
    return false;
  }
}
