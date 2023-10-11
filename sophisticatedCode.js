/* 
* Filename: sophisticatedCode.js
* Description: Complex and elaborate JavaScript code
*/

// Function to generate a random string
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Class representing a Student
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, and I'm in grade ${this.grade}.`);
  }

  study() {
    console.log(`${this.name} is studying hard.`);
  }
}

// Function that finds the maximum number in an array
function findMaxNumber(numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

// Function that calculates the factorial of a number
function calculateFactorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

// Generate an array of random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100));
}

// Output the maximum number in the array
const maxNumber = findMaxNumber(randomNumbers);
console.log(`The maximum number in the array is: ${maxNumber}`);

// Output the factorial of a random number
const randomNumber = Math.floor(Math.random() * 10) + 1;
const factorial = calculateFactorial(randomNumber);
console.log(`The factorial of ${randomNumber} is: ${factorial}`);

// Create an array of Student objects
const students = [
  new Student('John Doe', 18, 12),
  new Student('Jane Smith', 17, 11),
  new Student('Mike Johnson', 16, 10)
];

// Output information about each student
for (let i = 0; i < students.length; i++) {
  students[i].introduce();
  students[i].study();
}

// Generate a random string of length 15
const randomString = generateRandomString(15);
console.log(`Random string: ${randomString}`);

// ... add more sophisticated and elaborate code ...

// End of sophisticatedCode.js