function whileLoop1() {
  const numArray = [];
  let index = 0;
  while (index < 10) {
    numArray.push(index);
    index++;
  }
  return numArray;
}
const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  const numArray = [];
  let index = 0;
  while (index < 19) {
    numArray.push(index);
    index += 2;
  }
  return numArray;
}
const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const numArray = [];
  for (let index = 0; index < 10; index++) {
    numArray.push(index);
  }
  return numArray;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion', i);
  }
}
forLoop2();

const person = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const numArray = [];
  for (const key in object) {
    numArray.push(key);
  }
  return numArray;
}
const forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  const numArray = [];
  for (const key in object) {
    numArray.push(person[key]);
  }
  return numArray;
}
const forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
