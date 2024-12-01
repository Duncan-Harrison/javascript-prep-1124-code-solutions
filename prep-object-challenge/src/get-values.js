/* exported getValues */
function getValues(object) {
  const objectArray = [];
  for (const key in object) {
    objectArray.push(object[key]);
  }
  return objectArray;
}
