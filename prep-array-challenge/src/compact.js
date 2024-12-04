/* exported compact */
function compact(i) {
  const compactArray = [];
  for (let index = 0; index < i.length; index++) {
    if (i[index]) compactArray.push(i[index]);
  }
  return compactArray;
}
