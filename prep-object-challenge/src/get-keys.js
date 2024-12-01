/* exported getKeys */
function getKeys(object) {
  const objectArray = [];
  for (const key in object) {
    objectArray.push(key);
  }
  return objectArray;
}
