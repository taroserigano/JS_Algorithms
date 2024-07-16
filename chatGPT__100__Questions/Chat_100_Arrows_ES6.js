// 1. Double each number in an array
const doubleNumbers = arr => arr.map(num => num * 2);

// 2. Filter out even numbers
const filterEvens = arr => arr.filter(num => num % 2 !== 0);

// 3. Sum all numbers in an array
const sumNumbers = arr => arr.reduce((sum, num) => sum + num, 0);

// 4. Check if all numbers are positive
const allPositive = arr => arr.every(num => num > 0);

// 5. Print each number in the array
const printNumbers = arr => arr.forEach(num => console.log(num));

// 6. Sort numbers in ascending order
const sortNumbersAsc = arr => arr.sort((a, b) => a - b);

// 7. Sort numbers in descending order
const sortNumbersDesc = arr => arr.sort((a, b) => b - a);

// 8. Find the first even number
const findFirstEven = arr => arr.find(num => num % 2 === 0);

// 9. Find the index of the first even number
const findIndexFirstEven = arr => arr.findIndex(num => num % 2 === 0);

// 10. Check if at least one number is even
const someEven = arr => arr.some(num => num % 2 === 0);

// 11. Create a new array with only positive numbers
const positiveNumbers = arr => arr.filter(num => num > 0);

// 12. Create a new array with the square of each number
const squareNumbers = arr => arr.map(num => num ** 2);

// 13. Concatenate all strings in an array
const concatenateStrings = arr => arr.reduce((str, item) => str + item, '');

// 14. Find the maximum number
const maxNumber = arr => arr.reduce((max, num) => num > max ? num : max, -Infinity);

// 15. Find the minimum number
const minNumber = arr => arr.reduce((min, num) => num < min ? num : min, Infinity);

// 16. Flatten a 2D array
const flattenArray = arr => arr.reduce((flat, subArr) => flat.concat(subArr), []);

// 17. Remove duplicates from an array
const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);

// 18. Reverse an array
const reverseArray = arr => arr.reverse();

// 19. Convert all strings to uppercase
const uppercaseStrings = arr => arr.map(str => str.toUpperCase());

// 20. Get the length of each string in an array
const stringLengths = arr => arr.map(str => str.length);

// 21. Calculate the factorial of each number
const factorial = num => (num <= 1 ? 1 : num * factorial(num - 1));
const factorials = arr => arr.map(num => factorial(num));

// 22. Calculate the cumulative sum of an array
const cumulativeSum = arr => arr.reduce((acc, num) => {
  acc.push((acc.length > 0 ? acc[acc.length - 1] : 0) + num);
  return acc;
}, []);

// 23. Count the occurrences of each item in an array
const countOccurrences = arr => arr.reduce((countMap, item) => {
  countMap[item] = (countMap[item] || 0) + 1;
  return countMap;
}, {});

// 24. Group items by a key
const groupBy = (arr, key) => arr.reduce((groupMap, item) => {
  const keyValue = item[key];
  groupMap[keyValue] = groupMap[keyValue] || [];
  groupMap[keyValue].push(item);
  return groupMap;
}, {});

// 25. Check if all strings contain a specific substring
const allContainSubstring = (arr, substring) => arr.every(str => str.includes(substring));

// 26. Calculate the average of an array
const average = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

// 27. Find the longest string
const longestString = arr => arr.reduce((longest, str) => str.length > longest.length ? str : longest, '');

// 28. Get a unique array of objects by a key
const uniqueByKey = (arr, key) => [...new Map(arr.map(item => [item[key], item])).values()];

// 29. Get the first n elements of an array
const firstNElements = (arr, n) => arr.slice(0, n);

// 30. Get the last n elements of an array
const lastNElements = (arr, n) => arr.slice(-n);

// 31. Partition an array into two arrays based on a predicate
const partition = (arr, predicate) => arr.reduce(([pass, fail], elem) => predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]], [[], []]);

// 32. Zip two arrays together
const zipArrays = (arr1, arr2) => arr1.map((elem, index) => [elem, arr2[index]]);

// 33. Calculate the product of all numbers in an array
const productNumbers = arr => arr.reduce((product, num) => product * num, 1);

// 34. Get the indices of all occurrences of an item
const indicesOf = (arr, item) => arr.reduce((indices, elem, index) => (elem === item ? [...indices, index] : indices), []);

// 35. Create an array of a given length filled with a specific value
const createArray = (length, value) => Array.from({ length }, () => value);

// 36. Calculate the sum of squares of an array
const sumOfSquares = arr => arr.reduce((sum, num) => sum + num ** 2, 0);

// 37. Rotate an array by n positions
const rotateArray = (arr, n) => arr.slice(n).concat(arr.slice(0, n));

// 38. Remove all falsy values from an array
const removeFalsy = arr => arr.filter(Boolean);

// 39. Intersect two arrays
const intersectArrays = (arr1, arr2) => arr1.filter(elem => arr2.includes(elem));

// 40. Union of two arrays
const unionArrays = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

// 41. Difference between two arrays
const differenceArrays = (arr1, arr2) => arr1.filter(elem => !arr2.includes(elem));

// 42. Symmetric difference between two arrays
const symmetricDifferenceArrays = (arr1, arr2) => [...new Set([...arr1.filter(elem => !arr2.includes(elem)), ...arr2.filter(elem => !arr1.includes(elem))])];

// 43. Check if an array is sorted
const isSorted = arr => arr.every((num, index) => index === 0 || arr[index - 1] <= num);

// 44. Check if an array is a palindrome
const isPalindrome = arr => arr.every((num, index) => num === arr[arr.length - 1 - index]);

// 45. Remove specific item from an array
const removeItem = (arr, item) => arr.filter(elem => elem !== item);

// 46. Insert item at a specific index
const insertItem = (arr, index, item) => [...arr.slice(0, index), item, ...arr.slice(index)];

// 47. Replace an item in an array
const replaceItem = (arr, oldItem, newItem) => arr.map(elem => (elem === oldItem ? newItem : elem));

// 48. Count the number of unique items in an array
const countUniqueItems = arr => new Set(arr).size;

// 49. Create an array of numbers in a range
const range = (start, end) => Array.from({ length: end - start + 1 }, (v, k) => k + start);

// 50. Merge two sorted arrays
const mergeSortedArrays = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);

// 51. Find common elements in multiple arrays
const commonElements = (...arrays) => arrays.reduce((common, arr) => common.filter(elem => arr.includes(elem)));

// 52. Remove consecutive duplicates from an array
const removeConsecutiveDuplicates = arr => arr.filter((elem, index) => index === 0 || elem !== arr[index - 1]);

// 53. Count the number of even numbers in an array
const countEvens = arr => arr.reduce((count, num) => (num % 2 === 0 ? count + 1 : count), 0);

// 54. Find the index of the maximum number
const indexOfMax = arr => arr.indexOf(Math.max(...arr));

// 55. Find the index of the minimum number
const indexOfMin = arr => arr.indexOf(Math.min(...arr));

// 56. Create an array of random numbers
const randomNumbers = (length, min, max) => Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// 57. Calculate the cumulative product of an array
const cumulativeProduct = arr => arr.reduce((acc, num) => {
  acc.push((acc.length > 0 ? acc[acc.length - 1] : 1) * num);
  return acc;
}, []);

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

// 59. Split an array into chunks of a specified size
const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// 60. Create an array of unique random numbers
const uniqueRandomNumbers = (length, min, max) => {
  const numbers = new Set();
  while (numbers.size < length) {
    numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return [...numbers];
};

// 61. Get the keys of an object as an array
const getObjectKeys = obj => Object.keys(obj);

// 62. Get the values of an object as an array
const getObjectValues = obj => Object.values(obj);

// 63. Get the entries of an object as an array
const getObjectEntries = obj => Object.entries(obj);

// 64. Merge two objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// 65. Clone an object
const cloneObject = obj => ({ ...obj });

// 66. Invert the keys and values of an object
const invertObject = obj => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

// 67. Get a subset of an object by keys
const subsetObject = (obj, keys) => keys.reduce((subset, key) => {
  if (key in obj) {
    subset[key] = obj[key];
  }
  return subset;
}, {});

// 68. Remove keys from an object
const removeObjectKeys = (obj, keys) => {
  const newObj = { ...obj };
  keys.forEach(key => delete newObj[key]);
  return newObj;
};

// 69. Check if an object has a specific key
const hasKey = (obj, key) => key in obj;

// 70. Check if an object has a specific value
const hasValue = (obj, value) => Object.values(obj).includes(value);

// 71. Find the key of a specific value in an object
const findKeyByValue = (obj, value) => Object.keys(obj).find(key => obj[key] === value);

// 72. Create a new object with the same keys and all values set to null
const nullifyObjectValues = obj => Object.keys(obj).reduce((newObj, key) => {
  newObj[key] = null;
  return newObj;
}, {});

// 73. Swap keys and values in an object
const swapKeysValues = obj => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));

// 74. Find all keys of a specific value in an object
const findAllKeysByValue = (obj, value) => Object.keys(obj).filter(key => obj[key] === value);

// 75. Get the length of an object (number of keys)
const getObjectLength = obj => Object.keys(obj).length;

// 76. Check if an object is empty
const isObjectEmpty = obj => Object.keys(obj).length === 0;

// 77. Filter the keys of an object
const filterObjectKeys = (obj, predicate) => Object.keys(obj).filter(key => predicate(key));

// 78. Filter the values of an object
const filterObjectValues = (obj, predicate) => Object.values(obj).filter(value => predicate(value));

// 79. Map the keys of an object
const mapObjectKeys = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [fn(key), value]));

// 80. Map the values of an object
const mapObjectValues = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

// 81. Get the maximum value in an object
const maxObjectValue = obj => Math.max(...Object.values(obj));

// 82. Get the minimum value in an object
const minObjectValue = obj => Math.min(...Object.values(obj));

// 83. Find the key of the maximum value in an object
const keyOfMaxValue = obj => Object.keys(obj).reduce((maxKey, key) => (obj[key] > obj[maxKey] ? key : maxKey), Object.keys(obj)[0]);

// 84. Find the key of the minimum value in an object
const keyOfMinValue = obj => Object.keys(obj).reduce((minKey, key) => (obj[key] < obj[minKey] ? key : minKey), Object.keys(obj)[0]);

// 85. Merge an array of objects by a key
const mergeObjectsByKey = (arr, key) => arr.reduce((merged, obj) => {
  merged[obj[key]] = { ...merged[obj[key]], ...obj };
  return merged;
}, {});

// 86. Calculate the sum of a specific property in an array of objects
const sumProperty = (arr, prop) => arr.reduce((sum, obj) => sum + obj[prop], 0);

// 87. Calculate the average of a specific property in an array of objects
const averageProperty = (arr, prop) => sumProperty(arr, prop) / arr.length;

// 88. Find the object with the maximum value of a specific property
const maxPropertyObject = (arr, prop) => arr.reduce((maxObj, obj) => (obj[prop] > maxObj[prop] ? obj : maxObj), arr[0]);

// 89. Find the object with the minimum value of a specific property
const minPropertyObject = (arr, prop) => arr.reduce((minObj, obj) => (obj[prop] < minObj[prop] ? obj : minObj), arr[0]);

// 90. Group an array of objects by a property
const groupByProperty = (arr, prop) => arr.reduce((grouped, obj) => {
  const key = obj[prop];
  grouped[key] = grouped[key] || [];
  grouped[key].push(obj);
  return grouped;
}, {});

// 91. Filter an array of objects by a property value
const filterByProperty = (arr, prop, value) => arr.filter(obj => obj[prop] === value);

// 92. Remove a property from all objects in an array
const removeProperty = (arr, prop) => arr.map(obj => {
  const newObj = { ...obj };
  delete newObj[prop];
  return newObj;
});

// 93. Add a property to all objects in an array
const addProperty = (arr, prop, value) => arr.map(obj => ({ ...obj, [prop]: value }));

// 94. Replace a property value in all objects in an array
const replacePropertyValue = (arr, prop, newValue) => arr.map(obj => ({ ...obj, [prop]: newValue }));

// 95. Check if all objects in an array have a specific property
const allHaveProperty = (arr, prop) => arr.every(obj => prop in obj);

// 96. Check if at least one object in an array has a specific property
const someHaveProperty = (arr, prop) => arr.some(obj => prop in obj);

// 97. Get an array of values of a specific property from an array of objects
const pluckProperty = (arr, prop) => arr.map(obj => obj[prop]);

// 98. Count the occurrences of a specific property value in an array of objects
const countPropertyOccurrences = (arr, prop) => arr.reduce((countMap, obj) => {
  const value = obj[prop];
  countMap[value] = (countMap[value] || 0) + 1;
  return countMap;
}, {});

// 99. Find the index of the object with the maximum value of a specific property
const indexOfMaxProperty = (arr, prop) => arr.reduce((maxIndex, obj, index) => (obj[prop] > arr[maxIndex][prop] ? index : maxIndex), 0);

// 100. Find the index of the object with the minimum value of a specific property
const indexOfMinProperty = (arr, prop) => arr.reduce((minIndex, obj, index) => (obj[prop] < arr[minIndex][prop] ? index : minIndex), 0);
