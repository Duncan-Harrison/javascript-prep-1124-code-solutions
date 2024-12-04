/* exported initial */
function initial(i) {
  const initialArray = [];
  let k = 0;
  for (let index = 0; index < i.length - 1; index++) {
    initialArray[k] = i[index];
    k++;
  }
  return initialArray;
}
