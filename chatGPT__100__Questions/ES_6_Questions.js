Question 1: Arrow Functions and this Keyword
Problem:

Create a class Person with a method greet that returns a greeting string containing the person's name. Use an arrow function within the method to demonstrate how this works differently in arrow functions.

Example:

javascript
Copy code
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    const arrowFunction = () => `Hello, my name is ${this.name}`;
    return arrowFunction();
  }
}

const person = new Person('Alice');
console.log(person.greet()); // Output: Hello, my name is Alice
Explanation:

Candidates should understand how the this keyword is lexically bound in arrow functions.

Question 2: Destructuring Assignment
Problem:

Write a function that takes an object with properties name, age, and location, and returns a string in the format "Name: [name], Age: [age], Location: [location]". Use destructuring to extract the properties from the object.

Example:

javascript
Copy code
function formatPerson(person) {
  const { name, age, location } = person;
  return `Name: ${name}, Age: ${age}, Location: ${location}`;
}

const person = { name: 'Bob', age: 30, location: 'New York' };
console.log(formatPerson(person)); // Output: Name: Bob, Age: 30, Location: New York
Explanation:

Candidates should use object destructuring to extract properties from an object.

Question 3: Promises and Async/Await
Problem:

Write an async function fetchData that fetches data from a given URL using the Fetch API. The function should log "Fetching data..." before making the request, and log "Data fetched successfully!" after the data is fetched. Use async/await syntax.

Example:

javascript
Copy code
async function fetchData(url) {
  console.log('Fetching data...');
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data fetched successfully!', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData('https://jsonplaceholder.typicode.com/posts/1');
Explanation:

Candidates should demonstrate understanding of the async/await syntax and handling of asynchronous operations.

Question 4: Spread Operator
Problem:

Write a function mergeArrays that takes two arrays and returns a new array that contains all elements from both arrays without duplicates. Use the spread operator and Set.

Example:

javascript
Copy code
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
console.log(mergeArrays(array1, array2)); // Output: [1, 2, 3, 4, 5]
Explanation:

Candidates should demonstrate their ability to use the spread operator to merge arrays and remove duplicates using a Set.

Question 5: Template Literals
Problem:

Write a function createMessage that takes a person's name and age and returns a string in the format: "Hello, my name is [name] and I am [age] years old." Use template literals to construct the string.

Example:

javascript
Copy code
function createMessage(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(createMessage('Charlie', 25)); // Output: Hello, my name is Charlie and I am 25 years old.
Explanation:

Candidates should use template literals to embed variables within a string.

Question 6: Default Parameters
Problem:

Write a function greet that takes a name parameter and an optional greeting parameter. If the greeting parameter is not provided, it should default to "Hello". The function should return a greeting string.

Example:

javascript
Copy code
function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greet('David')); // Output: Hello, David!
console.log(greet('David', 'Hi')); // Output: Hi, David!
Explanation:

Candidates should demonstrate the use of default parameters in function definitions.

Question 7: Rest Parameters
Problem:

Write a function sumAll that takes any number of arguments and returns their sum. Use the rest parameter to gather all arguments into an array.

Example:

javascript
Copy code
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15)); // Output: 30
Explanation:

Candidates should use rest parameters to handle an indefinite number of function arguments.

These questions cover a range of ES6 features, including classes, arrow functions, destructuring, promises, spread operator, template literals, default parameters, and rest parameters.






