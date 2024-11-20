const person = {
  firstName: 'Kevin',
  lastName: 'Hart',
  hobby: 'standup comedy',
};
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'actor';
console.log("The person's current job is:", person.job);
person.previousJob = 'comic';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
