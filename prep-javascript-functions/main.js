function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', sum);
function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', minutes);
function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('World');
console.log('getGreeting:', greeting);
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Result:', sumTimesFive);
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Results:', productDividedByFive);
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Result:', difference);
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circumference = getCircleCircumference(5);
console.log('getCircleCircumference Result:', circumference);
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);
function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log('cube Result:', cubed);
