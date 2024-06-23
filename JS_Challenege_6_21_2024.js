
// 1. Remove duplicates from an array using Set
const removeDuplicates = (arr) => {
    return [...new Set(arr)];
};

// Practical example
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arrayWithDuplicates)); // Output: [1, 2, 3, 4, 5]

// 2. Remove null, undefined, 0, NaN, and '' from an array using filter
const removeFalsyValues = (arr) => {
    return arr.filter(value => value !== null && value !== undefined && value !== 0 && !Number.isNaN(value) && value !== '');
};

// Practical example
const arrayWithFalsyValues = [1, null, 2, undefined, 0, 3, NaN, 4, '', 5];
console.log(removeFalsyValues(arrayWithFalsyValues)); // Output: [1, 2, 3, 4, 5]

// 3. Calculate the factorial of a number using recursion
const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

// Practical example
console.log(factorial(5)); // Output: 120

// 4. Find the intersection and union of two arrays using ES6 features
const arrayIntersection = (arr1, arr2) => {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
};

const arrayUnion = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])];
};

// Practical example
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(arrayIntersection(array1, array2)); // Output: [3, 4]
console.log(arrayUnion(array1, array2)); // Output: [1, 2, 3, 4, 5, 6]

// 5. Reverse a number using string manipulation
  
  const reverseNumber = (num) => {
    let res = 0;
    let n = Math.abs(num) 

    while (n > 0) {
      res = res * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    return res * Math.sign(num)
  };

   console.log(reverseNumber(12345)); // Output: 54321
   console.log(reverseNumber(-12345)); // Output: -54321

// Practical example
console.log(reverseNumber(12345)); // Output: 54321
console.log(reverseNumber(-12345)); // Output: -54321
