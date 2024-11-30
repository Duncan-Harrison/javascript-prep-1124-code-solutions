/* exported tail */
function tail(i) {
  const find = [];
  let k = 0;
  for (let index = 1; index < i.length; index++) {
    find[k] = i[index];
    k++;
  }
  return find;
}
