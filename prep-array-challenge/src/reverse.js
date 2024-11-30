/* exported reverse */
function reverse(i) {
  const reverseArray = [];
  let k = 0;
  for (let index = i.length - 1; index >= 0; index--) {
    reverseArray[k] = i[index];
    k++;
  }
  return reverseArray;
}
