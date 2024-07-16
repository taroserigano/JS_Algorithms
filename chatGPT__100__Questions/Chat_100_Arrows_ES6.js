// 1. Double each number in an array
const doubleNumbers = arr => arr.map(num => num * 2);
// Example usage:
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]

// 2. Filter out even numbers
const filterEvens = arr => arr.filter(num => num % 2 !== 0);
// Example usage:
console.log(filterEvens([1, 2, 3, 4])); // [1, 3]

// 3. Sum all numbers in an array
const sumNumbers = arr => arr.reduce((sum, num) => sum + num, 0);
// Example usage:
console.log(sumNumbers([1, 2, 3])); // 6

// 4. Check if all numbers are positive
const allPositive = arr => arr.every(num => num > 0);
// Example usage:
console.log(allPositive([1, 2, 3])); // true
console.log(allPositive([1, -2, 3])); // false

// 5. Print each number in the array
const printNumbers = arr => arr.forEach(num => console.log(num));
// Example usage:
printNumbers([1, 2, 3]); // 1 2 3

// 6. Sort numbers in ascending order
const sortNumbersAsc = arr => arr.sort((a, b) => a - b);
// Example usage:
console.log(sortNumbersAsc([3, 1, 2])); // [1, 2, 3]

// 7. Sort numbers in descending order
const sortNumbersDesc = arr => arr.sort((a, b) => b - a);
// Example usage:
console.log(sortNumbersDesc([3, 1, 2])); // [3, 2, 1]

// 8. Find the first even number
const findFirstEven = arr => arr.find(num => num % 2 === 0);
// Example usage:
console.log(findFirstEven([1, 3, 4, 6])); // 4

// 9. Find the index of the first even number
const findIndexFirstEven = arr => arr.findIndex(num => num % 2 === 0);
// Example usage:
c
