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
console.log(findIndexFirstEven([1, 3, 4, 6])); // 2

// 10. Check if at least one number is even
const someEven = arr => arr.some(num => num % 2 === 0);
// Example usage:
console.log(someEven([1, 3, 5])); // false
console.log(someEven([1, 3, 4])); // true

// 11. Create a new array with only positive numbers
const positiveNumbers = arr => arr.filter(num => num > 0);
// Example usage:
console.log(positiveNumbers([1, -2, 3, -4])); // [1, 3]

// 12. Create a new array with the square of each number
const squareNumbers = arr => arr.map(num => num ** 2);
// Example usage:
console.log(squareNumbers([1, 2, 3])); // [1, 4, 9]

// 13. Concatenate all strings in an array
const concatenateStrings = arr => arr.reduce((str, item) => str + item, '');
// Example usage:
console.log(concatenateStrings(["Hello", " ", "World"])); // "Hello World"

// 14. Find the maximum number
const maxNumber = arr => arr.reduce((max, num) => num > max ? num : max, -Infinity);
// Example usage:
console.log(maxNumber([1, 2, 3])); // 3

// 15. Find the minimum number
const minNumber = arr => arr.reduce((min, num) => num < min ? num : min, Infinity);
// Example usage:
console.log(minNumber([1, 2, 3])); // 1

// 16. Flatten a 2D array
const flattenArray = arr => arr.reduce((flat, subArr) => flat.concat(subArr), []);
// Example usage:
console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

// 17. Remove duplicates from an array
const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);
// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 3, 3])); // [1, 2, 3]

// 18. Reverse an array
const reverseArray = arr => arr.reverse();
// Example usage:
console.log(reverseArray([1, 2, 3])); // [3, 2, 1]

// 19. Convert all strings to uppercase
const uppercaseStrings = arr => arr.map(str => str.toUpperCase());
// Example usage:
console.log(uppercaseStrings(["hello", "world"])); // ["HELLO", "WORLD"]

// 20. Get the length of each string in an array
const stringLengths = arr => arr.map(str => str.length);
// Example usage:
console.log(stringLengths(["hello", "world"])); // [5, 5]

// 21. Calculate the factorial of each number
const factorial = num => (num <= 1 ? 1 : num * factorial(num - 1));
const factorials = arr => arr.map(num => factorial(num));
// Example usage:
console.log(factorials([1, 2, 3, 4])); // [1, 2, 6, 24]

// 22. Calculate the cumulative sum of an array
const cumulativeSum = arr => arr.reduce((acc, num) => {
  acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + num);
  return acc;
}, []);
// Example usage:
console.log(cumulativeSum([1, 2, 3, 4])); // [1, 3, 6, 10]

// 23. Count the occurrences of each item in an array
const countOccurrences = arr => arr.reduce((countMap, item) => {
  countMap[item] = (countMap[item] || 0) + 1;
  return countMap;
}, {});
// Example usage:
console.log(countOccurrences(["apple", "banana", "apple"])); // { apple: 2, banana: 1 }

// 24. Group items by a key
const groupBy = (arr, key) => arr.reduce((groupMap, item) => {
  const keyValue = item[key];
  groupMap[keyValue] = groupMap[keyValue] || [];
  groupMap[keyValue].push(item);
  return groupMap;
}, {});
// Example usage:
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 }
];
console.log(groupBy(people, 'name')); 
// { Alice: [{ name: "Alice", age: 25 }, { name: "Alice", age: 25 }], Bob: [{ name: "Bob", age: 30 }] }

// 25. Check if all strings contain a specific substring
const allContainSubstring = (arr, substring) => arr.every(str => str.includes(substring));
// Example usage:
console.log(allContainSubstring(["hello", "world"], "o")); // false
console.log(allContainSubstring(["hello", "world", "hold"], "o")); // true

// 26. Calculate the average of an array
const average = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;
// Example usage:
console.log(average([1, 2, 3, 4])); // 2.5

// 27. Find the longest string
const longestString = arr => arr.reduce((longest, str) => str.length > longest.length ? str : longest, '');
// Example usage:
console.log(longestString(["short", "longer", "longest"])); // "longest"

// 28. Get a unique array of objects by a key
const uniqueByKey = (arr, key) => [...new Map(arr.map(item => [item[key], item])).values()];
// Example usage:
const people2 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 1, name: "Alice", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
  { id: 2, name: "Bob", age: 30 }
];
console.log(uniqueByKey(people2, 'id'));
// [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 }
// ]

// 29. Get the first n elements of an array
const firstNElements = (arr, n) => arr.slice(0, n);
// Example usage:
console.log(firstNElements([1, 2, 3, 4, 5], 3)); // [1, 2, 3]

// 30. Get the last n elements of an array
const lastNElements = (arr, n) => arr.slice(-n);
// Example usage:
console.log(lastNElements([1, 2, 3, 4, 5], 3)); // [3, 4, 5]

// 31. Partition an array into two arrays based on a predicate
const partition = (arr, predicate) => arr.reduce(([pass, fail], elem) => predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);
// Example usage:
console.log(partition([1, 2, 3, 4, 5], x => x % 2 === 0)); // [[2, 4], [1, 3, 5]]

// 32. Zip two arrays together
const zipArrays = (arr1, arr2) => arr1.map((elem, index) => [elem, arr2[index]]);
// Example usage:
console.log(zipArrays(['a', 'b', 'c'], [1, 2, 3])); // [['a', 1], ['b', 2], ['c', 3]]

// 33. Calculate the product of all numbers in an array
const productNumbers = arr => arr.reduce((product, num) => product * num, 1);
// Example usage:
console.log(productNumbers([1, 2, 3, 4])); // 24

// 34. Get the indices of all occurrences of an item
const indicesOf = (arr, item) => arr.reduce((indices, elem, index) => (elem === item ? [...indices, index] : indices), []);
// Example usage:
console.log(indicesOf([1, 2, 1, 3, 1], 1)); // [0, 2, 4]

// 35. Create an array of a given length filled with a specific value
const createArray = (length, value) => Array.from({ length }, () => value);
// Example usage:
console.log(createArray(5, 'a')); // ['a', 'a', 'a', 'a', 'a']

// 36. Calculate the sum of squares of an array
const sumOfSquares = arr => arr.reduce((sum, num) => sum + num ** 2, 0);
// Example usage:
console.log(sumOfSquares([1, 2, 3])); // 14

// 37. Rotate an array by n positions
const rotateArray = (arr, n) => arr.slice(n).concat(arr.slice(0, n));
// Example usage:
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]

// 38. Remove all falsy values from an array
const removeFalsy = arr => arr.filter(Boolean);
// Example usage:
console.log(removeFalsy([0, 1, false, 2, '', 3, null])); // [1, 2, 3]

// 39. Intersect two arrays
const intersectArrays = (arr1, arr2) => arr1.filter(elem => arr2.includes(elem));
// Example usage:
console.log(intersectArrays([1, 2, 3], [2, 3, 4])); // [2, 3]

// 40. Union of two arrays
const unionArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];
// Example usage:
console.log(unionArrays([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]

// 41. Difference between two arrays
const differenceArrays = (arr1, arr2) => arr1.filter(elem => !arr2.includes(elem));
// Example usage:
console.log(differenceArrays([1, 2, 3], [2, 3, 4])); // [1]

// 42. Symmetric difference between two arrays
const symmetricDifferenceArrays = (arr1, arr2) => [...new Set([...arr1.filter(elem => !arr2.includes(elem)), ...arr2.filter(elem => !arr1.includes(elem))])];
// Example usage:
console.log(symmetricDifferenceArrays([1, 2, 3], [2, 3, 4])); // [1, 4]

// 43. Check if an array is sorted
const isSorted = arr => arr.every((num, index) => index === 0 || arr[index - 1] <= num);
// Example usage:
console.log(isSorted([1, 2, 3])); // true
console.log(isSorted([3, 2, 1])); // false

// 44. Check if an array is a palindrome
const isPalindrome = arr => arr.every((num, index) => num === arr[arr.length - 1 - index]);
// Example usage:
console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 4, 5])); // false

// 45. Remove specific item from an array
const removeItem = (arr, item) => arr.filter(elem => elem !== item);
// Example usage:
console.log(removeItem([1, 2, 3, 2, 1], 2)); // [1, 3, 1]

// 46. Insert item at a specific index
const insertItem = (arr, index, item) => [...arr.slice(0, index), item, ...arr.slice(index)];
// Example usage:
console.log(insertItem([1, 2, 3], 1, 'a')); // [1, 'a', 2, 3]

// 47. Replace an item in an array
const replaceItem = (arr, oldItem, newItem) => arr.map(elem => (elem === oldItem ? newItem : elem));
// Example usage:
console.log(replaceItem(["apple", "banana", "cherry", "banana", "date"], "banana", "blueberry")); 
// Output: ["apple", "blueberry", "cherry", "blueberry", "date"]

// 48. Count the number of unique items in an array
const countUniqueItems = arr => new Set(arr).size;
// Example usage:
console.log(countUniqueItems([1, 2, 2, 3, 3, 3])); // 3

// 49. Create an array of numbers in a range
const range = (start, end) => Array.from({ length: end - start + 1 }, (v, k) => k + start);
// Example usage:
console.log(range(1, 5)); // [1, 2, 3, 4, 5]

// 50. Merge two sorted arrays
const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
// Example usage:
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// 51. Find common elements in multiple arrays
const commonElements = (...arrays) => arrays.reduce((common, arr) => common.filter(elem => arr.includes(elem)));
// Example usage:
console.log(commonElements([1, 2, 3], [2, 3, 4], [3, 4, 5])); // [3]

// 52. Remove consecutive duplicates from an array
const removeConsecutiveDuplicates = arr => arr.filter((elem, index) => index === 0 || elem !== arr[index - 1]);
// Example usage:
console.log(removeConsecutiveDuplicates([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]

// 53. Count the number of even numbers in an array
const countEvens = arr => arr.reduce((count, num) => (num % 2 === 0 ? count + 1 : count), 0);
// Example usage:
console.log(countEvens([1, 2, 3, 4, 5])); // 2

// 54. Find the index of the maximum number
const indexOfMax = arr => arr.indexOf(Math.max(...arr));
// Example usage:
console.log(indexOfMax([1, 2, 3, 2, 1])); // 2

// 55. Find the index of the minimum number
const indexOfMin = arr => arr.indexOf(Math.min(...arr));
// Example usage:
console.log(indexOfMin([1, 2, 3, 2, 1])); // 0

// 56. Create an array of random numbers
const randomNumbers = (length, min, max) => Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
// Example usage:
console.log(randomNumbers(5, 1, 10)); // e.g., [3, 7, 1, 9, 5]

// 57. Calculate the cumulative product of an array
const cumulativeProduct = arr => arr.reduce((acc, num) => {
  acc.push((acc.length > 0 ? acc[acc.length - 1] : 1) * num);
  return acc;
}, []);
// Example usage:
console.log(cumulativeProduct([1, 2, 3, 4])); // [1, 2, 6, 24]

// 58. Find the longest increasing subsequence
const longestIncreasingSubsequence = arr => {
  const lis = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }
  return Math.max(...lis);
};
// Example usage:
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])); // 4

// 59. Split an array into chunks of a specified size
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
// Example usage:
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]

// 60. Create an array of unique random numbers
const uniqueRandomNumbers = (length, min, max) => {
  const numbers = new Set();
  while (numbers.size < length) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return [...numbers];
};
// Example usage:
console.log(uniqueRandomNumbers(5, 1, 10)); // e.g., [1, 3, 7, 8, 10]

// 61. Get the keys of an object as an array
const getObjectKeys = obj => Object.keys(obj);
// Example usage:
console.log(getObjectKeys({ a: 1, b: 2, c: 3 })); // ['a', 'b', 'c']

// 62. Get the values of an object as an array
const getObjectValues = obj => Object.values(obj);
// Example usage:
console.log(getObjectValues({ a: 1, b: 2, c: 3 })); // [1, 2, 3]

// 63. Get the entries of an object as an array
const getObjectEntries = obj => Object.entries(obj);
// Example usage:
console.log(getObjectEntries({ a: 1, b: 2, c: 3 })); // [['a', 1], ['b', 2], ['c', 3]]

// 64. Merge two objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
// Example usage:
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }

// 65. Clone an object
const cloneObject = obj => ({ ...obj });
// Example usage:
const original = { a: 1, b: 2 };
const clone = cloneObject(original);
console.log(clone); // { a: 1, b: 2 }
console.log(clone === original); // false

// 66. Invert the keys and values of an object
const invertObject = obj => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
// Example usage:
console.log(invertObject({ a: 1, b: 2, c: 3 })); // { 1: 'a', 2: 'b', 3: 'c' }

// 67. Get a subset of an object by keys
const subsetObject = (obj, keys) => keys.reduce((subset, key) => {
  if (key in obj) {
    subset[key] = obj[key];
  }
  return subset;
}, {});
// Example usage:
console.log(subsetObject({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // { a: 1, c: 3 }

// 68. Remove keys from an object
const removeObjectKeys = (obj, keys) => {
  const newObj = { ...obj };
  keys.forEach(key => delete newObj[key]);
  return newObj;
};
// Example usage:
console.log(removeObjectKeys({ a: 1, b: 2, c: 3 }, ['b'])); // { a: 1, c: 3 }

// 69. Check if an object has a specific key
const hasKey = (obj, key) => key in obj;
// Example usage:
console.log(hasKey({ a: 1, b: 2 }, 'a')); // true
console.log(hasKey({ a: 1, b: 2 }, 'c')); // false

// 70. Check if an object has a specific value
const hasValue = (obj, value) => Object.values(obj).includes(value);
// Example usage:
console.log(hasValue({ a: 1, b: 2 }, 2)); // true
console.log(hasValue({ a: 1, b: 2 }, 3)); // false

// 71. Find the key of a specific value in an object
const findKeyByValue = (obj, value) => Object.keys(obj).find(key => obj[key] === value);
// Example usage:
console.log(findKeyByValue({ a: 1, b: 2, c: 3 }, 2)); // 'b'

// 72. Create a new object with the same keys and all values set to null
const nullifyObjectValues = obj => Object.keys(obj).reduce((newObj, key) => {
  newObj[key] = null;
  return newObj;
}, {});
// Example usage:
console.log(nullifyObjectValues({ a: 1, b: 2, c: 3 })); // { a: null, b: null, c: null }

// 73. Swap keys and values in an object
const swapKeysValues = obj => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
// Example usage:
console.log(swapKeysValues({ a: 1, b: 2, c: 3 })); // { 1: 'a', 2: 'b', 3: 'c' }

// 74. Find all keys of a specific value in an object
const findAllKeysByValue = (obj, value) => Object.keys(obj).filter(key => obj[key] === value);
// Example usage:
console.log(findAllKeysByValue({ a: 1, b: 2, c: 1 }, 1)); // ['a', 'c']

// 75. Get the length of an object (number of keys)
const getObjectLength = obj => Object.keys(obj).length;
// Example usage:
console.log(getObjectLength({ a: 1, b: 2, c: 3 })); // 3

// 76. Check if an object is empty
const isObjectEmpty = obj => Object.keys(obj).length === 0;
// Example usage:
console.log(isObjectEmpty({})); // true
console.log(isObjectEmpty({ a: 1 })); // false

// 77. Filter the keys of an object
const filterObjectKeys = (obj, predicate) => Object.keys(obj).filter(key => predicate(key));
// Example usage:
console.log(filterObjectKeys({ a: 1, b: 2, c: 3 }, key => key !== 'b')); // ['a', 'c']

// 78. Filter the values of an object
const filterObjectValues = (obj, predicate) => Object.values(obj).filter(value => predicate(value));
// Example usage:
console.log(filterObjectValues({ a: 1, b: 2, c: 3 }, value => value > 1)); // [2, 3]

// 79. Map the keys of an object
const mapObjectKeys = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [fn(key), value]));
// Example usage:
console.log(mapObjectKeys({ a: 1, b: 2, c: 3 }, key => key.toUpperCase())); // { A: 1, B: 2, C: 3 }

// 80. Map the values of an object
const mapObjectValues = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
// Example usage:
console.log(mapObjectValues({ a: 1, b: 2, c: 3 }, value => value * 2)); // { a: 2, b: 4, c: 6 }

// 81. Get the maximum value in an object
const maxObjectValue = obj => Math.max(...Object.values(obj));
// Example usage:
console.log(maxObjectValue({ a: 1, b: 2, c: 3 })); // 3

// 82. Get the minimum value in an object
const minObjectValue = obj => Math.min(...Object.values(obj));
// Example usage:
console.log(minObjectValue({ a: 1, b: 2, c: 3 })); // 1

// 83. Find the key of the maximum value in an object
const keyOfMaxValue = obj => Object.keys(obj).reduce((maxKey, key) => (obj[key] > obj[maxKey] ? key : maxKey), Object.keys(obj)[0]);
// Example usage:
console.log(keyOfMaxValue({ a: 1, b: 2, c: 3 })); // 'c'

// 84. Find the key of the minimum value in an object
const keyOfMinValue = obj => Object.keys(obj).reduce((minKey, key) => (obj[key] < obj[minKey] ? key : minKey), Object.keys(obj)[0]);
// Example usage:
console.log(keyOfMinValue({ a: 1, b: 2, c: 3 })); // 'a'

// 85. Merge an array of objects by a key
const mergeObjectsByKey = (arr, key) => arr.reduce((merged, obj) => {
  merged[obj[key]] = { ...merged[obj[key]], ...obj };
  return merged;
}, {});
// Example usage:
const objects = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, age: 25 },
  { id: 2, age: 30 }
];
console.log(mergeObjectsByKey(objects, 'id'));
// { '1': { id: 1, name: 'Alice', age: 25 }, '2': { id: 2, name: 'Bob', age: 30 } }

// 86. Calculate the sum of a specific property in an array of objects
const sumProperty = (arr, prop) => arr.reduce((sum, obj) => sum + obj[prop], 0);
// Example usage:
const items = [
  { name: 'item1', price: 100 },
  { name: 'item2', price: 200 },
  { name: 'item3', price: 300 }
];
console.log(sumProperty(items, 'price')); // 600

// 87. Calculate the average of a specific property in an array of objects
const averageProperty = (arr, prop) => sumProperty(arr, prop) / arr.length;
// Example usage:
console.log(averageProperty(items, 'price')); // 200

// 88. Find the object with the maximum value of a specific property
const maxPropertyObject = (arr, prop) => arr.reduce((maxObj, obj) => (obj[prop] > maxObj[prop] ? obj : maxObj), arr[0]);
// Example usage:
console.log(maxPropertyObject(items, 'price')); // { name: 'item3', price: 300 }

// 89. Find the object with the minimum value of a specific property
const minPropertyObject = (arr, prop) => arr.reduce((minObj, obj) => (obj[prop] < minObj[prop] ? obj : minObj), arr[0]);
// Example usage:
console.log(minPropertyObject(items, 'price')); // { name: 'item1', price: 100 }

// 90. Group an array of objects by a property
const groupByProperty = (arr, prop) => arr.reduce((grouped, obj) => {
  const key = obj[prop];
  grouped[key] = grouped[key] || [];
  grouped[key].push(obj);
  return grouped;
}, {});
// Example usage:
const people3 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 25 }
];
console.log(groupByProperty(people3, 'age'));
// { '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], '30': [{ name: 'Bob', age: 30 }] }

// 91. Filter an array of objects by a property value
const filterByProperty = (arr, prop, value) => arr.filter(obj => obj[prop] === value);
// Example usage:
console.log(filterByProperty(people3, 'age', 25));
// [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }]

// 92. Remove a property from all objects in an array
const removeProperty = (arr, prop) => arr.map(obj => {
  const newObj = { ...obj };
  delete newObj[prop];
  return newObj;
});
// Example usage:
console.log(removeProperty(people3, 'age'));
// [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }]

// 93. Add a property to all objects in an array
const addProperty = (arr, prop, value) => arr.map(obj => ({ ...obj, [prop]: value }));
// Example usage:
console.log(addProperty(people3, 'gender', 'unknown'));
// [{ name: 'Alice', age: 25, gender: 'unknown' }, { name: 'Bob', age: 30, gender: 'unknown' }, { name: 'Charlie', age: 25, gender: 'unknown' }]

// 94. Replace a property value in all objects in an array
const replacePropertyValue = (arr, prop, newValue) => arr.map(obj => ({ ...obj, [prop]: newValue }));
// Example usage:
console.log(replacePropertyValue(people3, 'age', 99));
// [{ name: 'Alice', age: 99 }, { name: 'Bob', age: 99 }, { name: 'Charlie', age: 99 }]

// 95. Check if all objects in an array have a specific property
const allHaveProperty = (arr, prop) => arr.every(obj => prop in obj);
// Example usage:
console.log(allHaveProperty(people3, 'age')); // true
console.log(allHaveProperty([{ name: 'Alice' }, { name: 'Bob', age: 30 }], 'age')); // false

// 96. Check if at least one object in an array has a specific property
const someHaveProperty = (arr, prop) => arr.some(obj => prop in obj);
// Example usage:
console.log(someHaveProperty(people3, 'age')); // true
console.log(someHaveProperty([{ name: 'Alice' }, { name: 'Bob' }], 'age')); // false

// 97. Get an array of values of a specific property from an array of objects
const pluckProperty = (arr, prop) => arr.map(obj => obj[prop]);
// Example usage:
console.log(pluckProperty(people3, 'name')); // ['Alice', 'Bob', 'Charlie']

// 98. Count the occurrences of a specific property value in an array of objects
const countPropertyOccurrences = (arr, prop) => arr.reduce((countMap, obj) => {
  const value = obj[prop];
  countMap[value] = (countMap[value] || 0) + 1;
  return countMap;
}, {});
// Example usage:
console.log(countPropertyOccurrences(people3, 'age')); // { '25': 2, '30': 1 }

// 99. Find the index of the object with the maximum value of a specific property
const indexOfMaxProperty = (arr, prop) => arr.reduce((maxIndex, obj, index) => (obj[prop] > arr[maxIndex][prop] ? index : maxIndex), 0);
// Example usage:
console.log(indexOfMaxProperty(items, 'price')); // 2

// 100. Find the index of the object with the minimum value of a specific property
const indexOfMinProperty = (arr, prop) => arr.reduce((minIndex, obj, index) => (obj[prop] < arr[minIndex][prop] ? index : minIndex), 0);
// Example usage:
console.log(indexOfMinProperty(items, 'price')); // 0
