Questions using some - if exists or not 
Write a function hasNegativeNumbers that checks if an array contains any negative numbers.
Write a function containsVowel that checks if a string array contains any strings starting with a vowel.
Write a function hasLongStrings that checks if an array of strings contains any strings longer than 10 characters.
Write a function hasAdult that checks if an array of objects representing people contains any person aged 18 or older.
Write a function hasHighScore that checks if any scores in an array of numbers are above 90.

Questions using every - if all or not 
Write a function areAllPositive that checks if all numbers in an array are positive.
Write a function areAllShortStrings that checks if all strings in an array have fewer than 10 characters.
Write a function areAllAdults that checks if all objects in an array representing people are aged 18 or older.
Write a function areAllEven that checks if all numbers in an array are even.
Write a function allStartWithA that checks if all strings in an array start with the letter 'A'.
    
Questions using find
Write a function findFirstNegative that returns the first negative number in an array.
Write a function findFirstVowelStart that returns the first string in an array that starts with a vowel.

const fun = (arr) => { 
    
    return arr.find((n) => {
    
    console.log(n[0])
    
         return vow.includes(n[0].toLowerCase())
    }
    )
}
  
Write a function findFirstLongString that returns the first string longer than 10 characters in an array.

  
const fun = (arr) => { 
    
    return arr.find((n) => n.length > 1)
 
}
Write a function findFirstAdult that returns the first person aged 18 or older from an array of objects representing people.

Write a function findFirstHighScore that returns the first score above 90 in an array of numbers.


  
Questions using findIndex
Write a function findIndexFirstNegative that returns the index of the first negative number in an array.
Write a function findIndexFirstVowelStart that returns the index of the first string in an array that starts with a vowel.
Write a function findIndexFirstLongString that returns the index of the first string longer than 10 characters in an array.
Write a function findIndexFirstAdult that returns the index of the first person aged 18 or older in an array of objects representing people.
Write a function findIndexFirstHighScore that returns the index of the first score above 90 in an array of numbers.
  
Questions using map
Write a function doubleNumbers that returns a new array with all numbers in an array doubled.

  const fun = (arr) => { 
    
    return arr.map((n) => n*2)
 
}
Write a function uppercaseStrings that returns a new array with all strings in an array converted to uppercase.

  const fun = (arr) => { 
    
    return arr.map((n) => n[0].toUpperCase() + n.slice(1))
 
}
Write a function extractAges that returns a new array containing the ages of all people from an array of 
  objects representing people.
    
const fun = (arr) => { 
    
    return arr.map((n) => n.age )
 
}
    
Write a function squareNumbers that returns a new array with all numbers in an array squared.

  
Write a function prependHello that returns a new array with "Hello, " prepended to each string in an array.

const fun = (arr) => { 
    
    return arr.map((n) => "Hello, " + n) 
 
} 
  
Questions using reduce
Write a function sumNumbers that returns the sum of all numbers in an array.
Write a function concatenateStrings that returns a single string that is the concatenation of all strings in an array.

    function concatenateStrings(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, '');
}
    
Write a function totalAge that returns the total age of all people from an array of objects representing people.

    
const fun = (arr) => { 
    
    return arr.reduce((acc, total)=> acc += total.age, 0)
 
}
    
Write a function productNumbers that returns the product of all numbers in an array.


    
    
Write a function longestString that returns the longest string in an array of strings.

    ];

const fun = (arr) => { 
    let max = 0  
    return arr.reduce((acc, cur)=> {
        if(max < cur.name.length){
            return cur.name
        }
    })
 
}
    
Questions using filter
Write a function filterNegativeNumbers that returns a new array containing only negative numbers from an array.
Write a function filterVowelStart that returns a new array containing only strings starting with a vowel from an array.

    
const fun = (arr) => { 

    return arr.filter((n) => vow.includes(n[0].toLowerCase()))
 
}
Write a function filterLongStrings that returns a new array containing only strings longer than 10 characters from an array.
    
Write a function filterAdults that returns a new array containing only people aged 18 or older from an array of objects representing people.
Write a function filterHighScores that returns a new array containing only scores above 90 from an array of numbers.

    
Combination of Methods
Write a function sumOfEvenNumbers that uses filter and reduce to return the sum of all even numbers in an array.
    
    
const fun = (arr) => { 
    
    return arr
        .filter(n => n % 2 === 0) 
        .reduce((acc, curr) => acc + curr, 0)
 
} 

Write a function doubleAndFilterPositive that uses map and filter to return a new array with all positive numbers doubled 
    and no negative numbers.

const fun = (arr) => { 
    
    return arr
        .filter(n => n > 0) 
        .map(n => n * 2) 
 
}
        
Write a function capitalizeAndFilterLong that uses map and filter to return a new array with all strings capitalized and 
        only those longer than 5 characters.

const fun = (arr) => { 
    
    return arr
        .filter(n => n.name.length  > 3) 
        .map(n => n.name[0].toUpperCase() + n.name.slice(1)) 
 
}
            
Write a function averageAgeOfAdults that uses filter and reduce to return the average age of all people aged 18 or older 
            from an array of objects representing people.

                ];

const fun = (arr) => { 
    
    let avg = arr.filter(n => n.age >= 18) 
    
    if(avg.length === 0)return 0 
    
    let total = avg.reduce((acc, cur)=> acc+ cur.age, 0) 
    
    return total / avg.length
    

 
}
                
Write a function productOfPositiveNumbers that uses filter and reduce to return the product of all positive numbers in an array.
    
Advanced Combination of Methods

Write a function namesStartingWithA that uses map, filter, and reduce to return a single string of names (concatenated) 
    from an array of objects representing people whose names start with 'A'.

        const fun = (arr) => { 
    
    return arr
        .filter(p => p.name.startsWith('A'))
        .reduce((acc, cur)=> acc + cur.name, '') || 0 
        
    return  "None"    

}


const fun = (arr) => { 
    
    return arr
        .filter(p => p.name.startsWith('A'))
        .map(p => p.name) 
        .reduce((acc, cur)=> acc + cur, '') || 0 
        
    return  "None"    

}


Write a function sumOfSquares that uses map and reduce to return the sum of squares of all numbers in an array. 
const fun = (arr) => { 
    
    return arr
        .map((n) => n*n) 
        .reduce((acc, curr)=>acc+curr, 0)

}
    
Write a function findFirstPrime that uses find to return the first prime number in an array of numbers.
    
Write a function doubleValuesAndFindSum that uses map and reduce to double all values in an array and then find their sum.
const fun = (arr) => { 
    
    return arr
        .map((n) => n*2) 
        .reduce((acc, curr)=>acc+curr, 0)

}
    
Write a function findAndReplaceNegative that uses map and some to replace all negative numbers in an array with their absolute values.

    
    
const fun = (numbers) => {

    return numbers.map(number => (number < 0 ? Math.abs(number) : number));
  
  return numbers;
};


Edge Case Handling
Write a function filterOutFalsyValues that uses filter to remove all falsy values from an array.
Write a function countOccurrences that uses reduce to count the occurrences of each element in an array and returns an object with element counts.

    
const chars = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'b'];

const fun = (arr) => { 
  return arr.reduce((acc, cur) => {
      acc[cur] = acc[cur]+1 || 1  
      return acc
  }, {})  
} 




console.log(fun(chars))


Write a function flattenArray that uses reduce to flatten a nested array into a single-level array.

    
const chars = ['a', 'b', 'a', 'c', 'b', 'a', 'd', 'b'];
const nested = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];



const flat = (arr) => { 

    return arr.reduce((acc, cur) => { 
        if(Array.isArray(cur)){
            acc = acc.concat(flat(cur))
        } else { 
            acc.push(cur)
        } 
        return acc 
    }, []) 
    
}
console.log(flat(nested))
   
Write a function groupBy that uses reduce to group an array of objects by a specified property.

const nested = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];

1:

const nested = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 25 }
];

const fun = (array, property) => {

     return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

console.log(fun(data, 'age'));


2:
const nested = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
const data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 30 },
  { name: 'Eve', age: 25 }
];

const fun = (arr, property) => {
    let obj = {} 
    for(let a of arr){ 
    
        let key = a[property]
        console.log(key)
        
        if(!obj[key]) obj[key] = [] 
        
        obj[key].push(a)
         
    }
    return obj 

}

console.log(fun(data, 'age'));


    
Write a function partitionByParity that uses reduce to partition an array of numbers into two arrays: one with even numbers and one with odd numbers.


    
    
    
    Performance and Optimization
Write a function findMaxUsingReduce that uses reduce to find the maximum number in an array.
Write a function filterAndSort that uses filter and sort to filter out negative numbers and then sort the remaining numbers in ascending order.
Write a function uniqueValues that uses reduce to return an array of unique values from an array with duplicates.
Write a function sumByProperty that uses reduce to return the sum of a specified property from an array of objects.
Write a function mergeArraysUsingReduce that uses reduce to merge an array of arrays into a single array.

    // 1. Find the maximum number in an array using reduce
const findMaxUsingReduce = (arr) => arr.reduce((max, current) => (current > max ? current : max), arr[0]);

// Practical example
const numbers = [10, 5, 20, 8, 15];
console.log(findMaxUsingReduce(numbers)); // Output: 20

// 2. Filter out negative numbers and sort the remaining numbers in ascending order
const filterAndSort = (arr) => arr.filter(num => num >= 0).sort((a, b) => a - b);

// Practical example
const mixedNumbers = [3, -1, 2, -7, 10, -5, 8];
console.log(filterAndSort(mixedNumbers)); // Output: [2, 3, 8, 10]

// 3. Return an array of unique values from an array with duplicates using reduce
const uniqueValues = (arr) => arr.reduce((unique, item) => {
    if (!unique.includes(item)) {
        unique.push(item);
    }
    return unique;
}, []);

// Practical example
const duplicateValues = [1, 2, 2, 3, 4, 4, 5];
console.log(uniqueValues(duplicateValues)); // Output: [1, 2, 3, 4, 5]

// 4. Return the sum of a specified property from an array of objects using reduce
const sumByProperty = (arr, prop) => arr.reduce((sum, obj) => sum + (obj[prop] || 0), 0);

// Practical example
const products = [
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 },
    { name: 'Product 3', price: 150 }
];
console.log(sumByProperty(products, 'price')); // Output: 450

// 5. Merge an array of arrays into a single array using reduce
const mergeArraysUsingReduce = (arrays) => arrays.reduce((merged, array) => merged.concat(array), []);

// Practical example
const arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
console.log(mergeArraysUsingReduce(arrayOfArrays)); // Output: [1, 2, 3, 4, 5, 6]

Data Transformation
Write a function transformObjectArray that uses map to transform an array of objects by renaming keys based on a provided mapping.
Write a function extractAndTransform that uses map and filter to extract a specific property from an array of objects and filter out null or undefined values.
Write a function incrementAges that uses map to increment the age of each person in an array of objects representing people.
Write a function totalPropertyValues that uses reduce to sum up the values of a specified property from an array of objects.
Write a function categorizeByAge that uses reduce to categorize an array of people into age groups (e.g., under 18, 18-65, 65+).

    // 1. Transform an array of objects by renaming keys based on a provided mapping
const transformObjectArray = (arr, keyMapping) => {
    return arr.map(obj => {
        let newObj = {};
        for (let key in obj) {
            if (keyMapping[key]) {
                newObj[keyMapping[key]] = obj[key];
            } else {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    });
};

// Practical example
const objects = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
const keyMapping = { name: 'fullName', age: 'years' };
console.log(transformObjectArray(objects, keyMapping)); 
// Output: [{ fullName: 'Alice', years: 25 }, { fullName: 'Bob', years: 30 }]

// 2. Extract a specific property from an array of objects and filter out null or undefined values
const extractAndTransform = (arr, prop) => {
    return arr.map(obj => obj[prop]).filter(value => value !== null && value !== undefined);
};

// Practical example
const data = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: null }, { name: 'Charlie', age: 30 }];
console.log(extractAndTransform(data, 'age')); 
// Output: [25, 30]

// 3. Increment the age of each person in an array of objects representing people
const incrementAges = (arr) => {
    return arr.map(person => ({ ...person, age: person.age + 1 }));
};

// Practical example
const people = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }];
console.log(incrementAges(people)); 
// Output: [{ name: 'Alice', age: 26 }, { name: 'Bob', age: 31 }]

// 4. Sum up the values of a specified property from an array of objects
const totalPropertyValues = (arr, prop) => {
    return arr.reduce((sum, obj) => sum + (obj[prop] || 0), 0);
};

// Practical example
const items = [{ value: 100 }, { value: 200 }, { value: 150 }];
console.log(totalPropertyValues(items, 'value')); 
// Output: 450

// 5. Categorize an array of people into age groups (e.g., under 18, 18-65, 65+)
const categorizeByAge = (arr) => {
    return arr.reduce((categories, person) => {
        if (person.age < 18) {
            categories.under18.push(person);
        } else if (person.age >= 18 && person.age <= 65) {
            categories.age18to65.push(person);
        } else {
            categories.over65.push(person);
        }
        return categories;
    }, { under18: [], age18to65: [], over65: [] });
};

// Practical example
const persons = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 70 }
];
console.log(categorizeByAge(persons)); 
// Output: { under18: [{ name: 'Alice', age: 17 }], age18to65: [{ name: 'Bob', age: 25 }], over65: [{ name: 'Charlie', age: 70 }] }

    
    
    Chaining Methods
Write a function transformAndSumEven that uses map, filter, and reduce to double the values, filter out the odd numbers, and sum the remaining even numbers.
Write a function capitalizeAndJoin that uses map and reduce to capitalize all strings in an array and join them into a single string.
Write a function filterTransformAndSum that uses filter, map, and reduce to filter out negative numbers, triple the remaining values, and find their sum.
Write a function uniqueSortedValues that uses filter and reduce to return a sorted array of unique values from an array with duplicates.
Write a function extractAndCount that uses map, filter, and reduce to extract a specific property from an array of objects, filter out undefined values, and count the remaining items.

    // 1. Double the values, filter out the odd numbers, and sum the remaining even numbers
const transformAndSumEven = (arr) => {
    return arr.map(num => num * 2)
              .filter(num => num % 2 === 0)
              .reduce((sum, num) => sum + num, 0);
};

// Practical example
const numbers = [1, 2, 3, 4, 5];
console.log(transformAndSumEven(numbers)); // Output: 20 (2*2 + 4*2 + 6*2 + 8*2 + 10*2)

// 2. Capitalize all strings in an array and join them into a single string
const capitalizeAndJoin = (arr) => {
    return arr.map(str => str.toUpperCase())
              .reduce((acc, str) => acc + str, '');
};

// Practical example
const words = ['hello', 'world'];
console.log(capitalizeAndJoin(words)); // Output: 'HELLOWORLD'

// 3. Filter out negative numbers, triple the remaining values, and find their sum
const filterTransformAndSum = (arr) => {
    return arr.filter(num => num >= 0)
              .map(num => num * 3)
              .reduce((sum, num) => sum + num, 0);
};

// Practical example
const mixedNumbers = [-1, 2, -3, 4, 5];
console.log(filterTransformAndSum(mixedNumbers)); // Output: 33 (2*3 + 4*3 + 5*3)

// 4. Return a sorted array of unique values from an array with duplicates
const uniqueSortedValues = (arr) => {
    const unique = arr.reduce((acc, val) => {
        if (!acc.includes(val)) {
            acc.push(val);
        }
        return acc;
    }, []);
    return unique.sort((a, b) => a - b);
};

// Practical example
const duplicateValues = [5, 3, 8, 3, 5, 9, 1];
console.log(uniqueSortedValues(duplicateValues)); // Output: [1, 3, 5, 8, 9]

// 5. Extract a specific property from an array of objects, filter out undefined values, and count the remaining items
const extractAndCount = (arr, prop) => {
    return arr.map(obj => obj[prop])
              .filter(val => val !== undefined)
              .reduce((count, val) => count + 1, 0);
};

// Practical example
const objects = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: null }, { name: 'Charlie' }];
console.log(extractAndCount(objects, 'age')); // Output: 2

    
    Complex Data Structures
Write a function groupByProperty that uses reduce to group an array of objects by a specified property and returns an object where each key is a property value and each value is an array of objects.
Write a function findMaxScoreStudent that uses map and reduce to find the student with the highest score from an array of student objects.
Write a function sumNestedProperty that uses reduce to sum up a nested property (e.g., scores.math) from an array of objects.
Write a function extractUniqueProperties that uses map and reduce to extract unique values of a specified property from an array of objects.
Write a function filterAndTransformObjects that uses filter and map to filter objects based on a property value and then transform the objects into a different format.

    // 1. Group an array of objects by a specified property
const groupByProperty = (arr, prop) => {
    return arr.reduce((grouped, obj) => {
        const key = obj[prop];
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(obj);
        return grouped;
    }, {});
};

// Practical example
const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' }
];
console.log(groupByProperty(students, 'grade'));
// Output: { A: [{ name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' }], B: [{ name: 'Bob', grade: 'B' }] }

// 2. Find the student with the highest score
const findMaxScoreStudent = (students) => {
    return students.reduce((maxStudent, student) => {
        return (student.score > (maxStudent.score || 0)) ? student : maxStudent;
    }, {});
};

// Practical example
const studentScores = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 95 }
];
console.log(findMaxScoreStudent(studentScores)); // Output: { name: 'Charlie', score: 95 }

// 3. Sum up a nested property from an array of objects
const sumNestedProperty = (arr, nestedProp) => {
    return arr.reduce((sum, obj) => {
        const value = nestedProp.split('.').reduce((o, key) => (o ? o[key] : 0), obj);
        return sum + value;
    }, 0);
};

// Practical example
const studentsWithScores = [
    { name: 'Alice', scores: { math: 90, english: 85 } },
    { name: 'Bob', scores: { math: 80, english: 88 } },
    { name: 'Charlie', scores: { math: 95, english: 90 } }
];
console.log(sumNestedProperty(studentsWithScores, 'scores.math')); // Output: 265

// 4. Extract unique values of a specified property from an array of objects
const extractUniqueProperties = (arr, prop) => {
    return arr.map(obj => obj[prop])
              .reduce((unique, value) => {
                  if (!unique.includes(value)) {
                      unique.push(value);
                  }
                  return unique;
              }, []);
};

// Practical example
const studentsWithGrades = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' }
];
console.log(extractUniqueProperties(studentsWithGrades, 'grade')); // Output: ['A', 'B']

// 5. Filter objects based on a property value and then transform the objects into a different format
const filterAndTransformObjects = (arr, prop, value, transformFn) => {
    return arr.filter(obj => obj[prop] === value)
              .map(transformFn);
};

// Practical example
const employees = [
    { name: 'Alice', department: 'HR', salary: 50000 },
    { name: 'Bob', department: 'Engineering', salary: 60000 },
    { name: 'Charlie', department: 'HR', salary: 55000 }
];
const transformFn = (obj) => ({ fullName: obj.name, income: obj.salary });
console.log(filterAndTransformObjects(employees, 'department', 'HR', transformFn));
// Output: [{ fullName: 'Alice', income: 50000 }, { fullName: 'Charlie', income: 55000 }]

    
    Real-world Scenarios
Write a function calculateTotalPrice that uses map and reduce to calculate the total price of items in a shopping cart, where each item has a price and quantity.
Write a function extractAndSortNames that uses map and sort to extract names from an array of user objects and sort them alphabetically.
Write a function findOldestPerson that uses reduce to find the oldest person from an array of objects representing people.
Write a function filterAndCountActiveUsers that uses filter and reduce to filter out inactive users from an array of user objects and count the remaining active users.
Write a function generateInvoice that uses map and reduce to generate an invoice from an array of purchased items, summing up the total cost.

    // 1. Calculate the total price of items in a shopping cart
const calculateTotalPrice = (cart) => {
    return cart.map(item => item.price * item.quantity)
               .reduce((total, price) => total + price, 0);
};

// Practical example
const shoppingCart = [
    { price: 10, quantity: 2 },
    { price: 20, quantity: 1 },
    { price: 5, quantity: 5 }
];
console.log(calculateTotalPrice(shoppingCart)); // Output: 65

// 2. Extract names from an array of user objects and sort them alphabetically
const extractAndSortNames = (users) => {
    return users.map(user => user.name)
                .sort();
};

// Practical example
const users = [
    { name: 'Charlie', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
];
console.log(extractAndSortNames(users)); // Output: ['Alice', 'Bob', 'Charlie']

// 3. Find the oldest person from an array of objects representing people
const findOldestPerson = (people) => {
    return people.reduce((oldest, person) => {
        return (person.age > (oldest.age || 0)) ? person : oldest;
    }, {});
};

// Practical example
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
    { name: 'Charlie', age: 30 }
];
console.log(findOldestPerson(people)); // Output: { name: 'Bob', age: 35 }

// 4. Filter out inactive users from an array of user objects and count the remaining active users
const filterAndCountActiveUsers = (users) => {
    return users.filter(user => user.active)
                .reduce((count, user) => count + 1, 0);
};

// Practical example
const usersStatus = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: true }
];
console.log(filterAndCountActiveUsers(usersStatus)); // Output: 2

// 5. Generate an invoice from an array of purchased items, summing up the total cost
const generateInvoice = (purchases) => {
    return purchases.map(item => ({ ...item, total: item.price * item.quantity }))
                    .reduce((invoice, item) => {
                        invoice.totalAmount += item.total;
                        invoice.items.push(item);
                        return invoice;
                    }, { totalAmount: 0, items: [] });
};

// Practical example
const purchasedItems = [
    { name: 'Item1', price: 10, quantity: 2 },
    { name: 'Item2', price: 20, quantity: 1 },
    { name: 'Item3', price: 5, quantity: 5 }
];
console.log(generateInvoice(purchasedItems)); 
// Output: { totalAmount: 65, items: [{ name: 'Item1', price: 10, quantity: 2, total: 20 }, { name: 'Item2', price: 20, quantity: 1, total: 20 }, { name: 'Item3', price: 5, quantity: 5, total: 25 }] }



    Additional Functionalities
Write a function findMinUsingReduce that uses reduce to find the minimum number in an array.
Write a function reverseStringArray that uses map to reverse each string in an array of strings.
Write a function capitalizeFirstLetter that uses map to capitalize the first letter of each string in an array.
Write a function sumOfSquaresUsingReduce that uses reduce to find the sum of squares of all numbers in an array.
Write a function filterOutNonStrings that uses filter to remove all non-string elements from an array.

    // 1. Find the minimum number in an array using reduce
const findMinUsingReduce = (arr) => {
    return arr.reduce((min, current) => (current < min ? current : min), arr[0]);
};

// Practical example
const numbers = [10, 5, 20, 8, 15];
console.log(findMinUsingReduce(numbers)); // Output: 5

// 2. Reverse each string in an array of strings using map
const reverseStringArray = (arr) => {
    return arr.map(str => str.split('').reverse().join(''));
};

// Practical example
const strings = ['hello', 'world', 'javascript'];
console.log(reverseStringArray(strings)); // Output: ['olleh', 'dlrow', 'tpircsavaj']

// 3. Capitalize the first letter of each string in an array using map
const capitalizeFirstLetter = (arr) => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

// Practical example
const words = ['hello', 'world', 'javascript'];
console.log(capitalizeFirstLetter(words)); // Output: ['Hello', 'World', 'Javascript']

// 4. Find the sum of squares of all numbers in an array using reduce
const sumOfSquaresUsingReduce = (arr) => {
    return arr.reduce((sum, num) => sum + num * num, 0);
};

// Practical example
const numbers = [1, 2, 3, 4];
console.log(sumOfSquaresUsingReduce(numbers)); // Output: 30 (1^2 + 2^2 + 3^2 + 4^2)

// 5. Remove all non-string elements from an array using filter
const filterOutNonStrings = (arr) => {
    return arr.filter(item => typeof item === 'string');
};

// Practical example
const mixedArray = [1, 'hello', true, 'world', null, 'javascript'];
console.log(filterOutNonStrings(mixedArray)); // Output: ['hello', 'world', 'javascript']

    
Data Aggregation
Write a function aggregateScores that uses reduce to aggregate scores of students from an array of objects, returning an object with total and average scores.
Write a function mergeProperties that uses reduce to merge properties of an array of objects into a single object.
Write a function findTopN that uses sort and slice to find the top N elements in an array.
Write a function extractAndAggregate that uses map and reduce to extract and aggregate a specific property from an array of objects.
Write a function filterAndTransformNumbers that uses filter and map to filter out negative numbers and double the remaining values.

    // 1. Aggregate scores of students from an array of objects, returning an object with total and average scores
const aggregateScores = (students) => {
    const { total, count } = students.reduce((acc, student) => {
        acc.total += student.score;
        acc.count += 1;
        return acc;
    }, { total: 0, count: 0 });

    return {
        total,
        average: total / count
    };
};

// Practical example
const studentScores = [
    { name: 'Alice', score: 90 },
    { name: 'Bob', score: 85 },
    { name: 'Charlie', score: 95 }
];
console.log(aggregateScores(studentScores)); // Output: { total: 270, average: 90 }

// 2. Merge properties of an array of objects into a single object
const mergeProperties = (arr) => {
    return arr.reduce((merged, obj) => {
        return { ...merged, ...obj };
    }, {});
};

// Practical example
const objects = [
    { a: 1, b: 2 },
    { b: 3, c: 4 },
    { d: 5 }
];
console.log(mergeProperties(objects)); // Output: { a: 1, b: 3, c: 4, d: 5 }

// 3. Find the top N elements in an array using sort and slice
const findTopN = (arr, n) => {
    return arr.slice().sort((a, b) => b - a).slice(0, n);
};

// Practical example
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8];
console.log(findTopN(numbers, 3)); // Output: [9, 8, 7]

// 4. Extract and aggregate a specific property from an array of objects using map and reduce
const extractAndAggregate = (arr, prop) => {
    return arr.map(obj => obj[prop])
              .reduce((acc, value) => acc + value, 0);
};

// Practical example
const items = [
    { name: 'Item1', value: 10 },
    { name: 'Item2', value: 20 },
    { name: 'Item3', value: 30 }
];
console.log(extractAndAggregate(items, 'value')); // Output: 60

// 5. Filter out negative numbers and double the remaining values using filter and map
const filterAndTransformNumbers = (arr) => {
    return arr.filter(num => num >= 0)
              .map(num => num * 2);
};

// Practical example
const mixedNumbers = [-1, 2, -3, 4, 5];
console.log(filterAndTransformNumbers(mixedNumbers)); // Output: [4, 8, 10]

    
    
    Handling Nested Structures
Write a function flattenDeep that uses reduce to recursively flatten a deeply nested array.
Write a function sumNestedArray that uses reduce to sum all numbers in a nested array.
Write a function countLeafNodes that uses reduce to count the number of leaf nodes in a nested object structure.
Write a function findDeepestNode that uses reduce to find the deepest node in a nested object structure.
Write a function mergeDeep that uses reduce to merge deeply nested objects.

// 1. Recursively flatten a deeply nested array using reduce
const flattenDeep = (arr) => {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenDeep(item) : item);
    }, []);
};

// Practical example
const nestedArray = [1, [2, [3, [4, 5]]], 6];
console.log(flattenDeep(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

// 2. Sum all numbers in a nested array using reduce
const sumNestedArray = (arr) => {
    return arr.reduce((sum, item) => {
        return sum + (Array.isArray(item) ? sumNestedArray(item) : item);
    }, 0);
};

// Practical example
const nestedArraySum = [1, [2, [3, [4, 5]]], 6];
console.log(sumNestedArray(nestedArraySum)); // Output: 21

// 3. Count the number of leaf nodes in a nested object structure using reduce
const countLeafNodes = (obj) => {
    const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);
    
    return Object.keys(obj).reduce((count, key) => {
        if (isObject(obj[key])) {
            return count + countLeafNodes(obj[key]);
        } else {
            return count + 1;
        }
    }, 0);
};

// Practical example
const nestedObject = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 }},
    g: { h: 5 }
};
console.log(countLeafNodes(nestedObject)); // Output: 5

// 4. Find the deepest node in a nested object structure using reduce
const findDeepestNode = (obj) => {
    const isObject = (val) => val && typeof val === 'object' && !Array.isArray(val);
    
    const traverse = (obj, depth) => {
        return Object.keys(obj).reduce((deepest, key) => {
            if (isObject(obj[key])) {
                const deep = traverse(obj[key], depth + 1);
                return deep.depth > deepest.depth ? deep : deepest;
            } else {
                return depth > deepest.depth ? { value: obj[key], depth } : deepest;
            }
        }, { value: null, depth: 0 });
    };

    return traverse(obj, 1).value;
};

// Practical example
const nestedObjectForDeepest = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 }},
    g: { h: 5 }
};
console.log(findDeepestNode(nestedObjectForDeepest)); // Output: 3 or 4 or 5 depending on the deepest path considered

// 5. Merge deeply nested objects using reduce
const mergeDeep = (...objects) => {
    const isObject = (obj) => obj && typeof obj === 'object';

    return objects.reduce((acc, obj) => {
        Object.keys(obj).forEach(key => {
            if (isObject(obj[key]) && isObject(acc[key])) {
                acc[key] = mergeDeep(acc[key], obj[key]);
            } else {
                acc[key] = obj[key];
            }
        });
        return acc;
    }, {});
};

// Practical example
const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { b: { c: 4, e: 5 }, f: 6 };
console.log(mergeDeep(obj1, obj2)); // Output: { a: 1, b: { c: 4, d: 3, e: 5 }, f: 6 }

    
Efficiency and Optimization
Write a function filterAndPaginate that uses filter and slice to filter an array based on a condition and paginate the results.
Write a function findMedian that uses sort and array indexing to find the median of an array of numbers.
Write a function filterAndMapLargeArray that uses filter and map to efficiently handle large arrays by breaking them into chunks.
Write a function memoizedSum that uses reduce to sum an array and caches the result for the same array to avoid redundant calculations.
Write a function uniqueValuesEfficient that uses Set and reduce to efficiently find unique values in a large array.

    // 1. Filter an array based on a condition and paginate the results
const filterAndPaginate = (arr, condition, page, pageSize) => {
    const filtered = arr.filter(condition);
    return filtered.slice((page - 1) * pageSize, page * pageSize);
};

// Practical example
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const condition = (num) => num > 5;
console.log(filterAndPaginate(data, condition, 1, 3)); // Output: [6, 7, 8]
console.log(filterAndPaginate(data, condition, 2, 3)); // Output: [9, 10]

// 2. Find the median of an array of numbers using sort and array indexing
const findMedian = (arr) => {
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
};

// Practical example
const numbers = [1, 3, 3, 6, 7, 8, 9];
console.log(findMedian(numbers)); // Output: 6

// 3. Efficiently handle large arrays by breaking them into chunks, using filter and map
const filterAndMapLargeArray = (arr, filterCondition, mapFn, chunkSize = 1000) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr.slice(i, i + chunkSize);
        result.push(...chunk.filter(filterCondition).map(mapFn));
    }
    return result;
};

// Practical example
const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);
const filterCondition = (num) => num % 2 === 0;
const mapFn = (num) => num * 2;
console.log(filterAndMapLargeArray(largeArray, filterCondition, mapFn, 1000)); 
// Output: [4, 8, 12, ..., 19996, 20000]

// 4. Sum an array and cache the result for the same array to avoid redundant calculations
const memoizedSum = () => {
    const cache = new Map();
    return (arr) => {
        const key = arr.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        const sum = arr.reduce((total, num) => total + num, 0);
        cache.set(key, sum);
        return sum;
    };
};

// Practical example
const sumArray = memoizedSum();
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15 (cached result)
console.log(sumArray([10, 20, 30])); // Output: 60

// 5. Efficiently find unique values in a large array using Set and reduce
const uniqueValuesEfficient = (arr) => {
    return arr.reduce((uniqueSet, item) => {
        uniqueSet.add(item);
        return uniqueSet;
    }, new Set());
};

// Practical example
const largeArrayWithDuplicates = Array.from({ length: 10000 }, (_, i) => i % 100);
console.log([...uniqueValuesEfficient(largeArrayWithDuplicates)]); 
// Output: [0, 1, 2, ..., 99]

Advanced Challenges
Write a function combinations that uses reduce to generate all combinations of elements in an array.
Write a function permutations that uses reduce to generate all permutations of elements in an array.
Write a function powerSet that uses reduce to generate the power set of an array.
Write a function partition that uses reduce to partition an array based on a predicate function.
Write a function zipArrays that uses reduce to combine two arrays into an array of tuples.

// 1. Generate all combinations of elements in an array using reduce
const combinations = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(acc.map(subset => [...subset, item]));
    }, [[]]);
};

// Practical example
const elements = [1, 2, 3];
console.log(combinations(elements));
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// 2. Generate all permutations of elements in an array using reduce
const permutations = (arr) => {
    if (arr.length === 0) return [[]];
    return arr.reduce((acc, item, i) => {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const perms = permutations(rest).map(p => [item, ...p]);
        return acc.concat(perms);
    }, []);
};

// Practical example
const elementsPerm = [1, 2, 3];
console.log(permutations(elementsPerm));
// Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

// 3. Generate the power set of an array using reduce
const powerSet = (arr) => {
    return arr.reduce((acc, item) => {
        return acc.concat(acc.map(subset => [...subset, item]));
    }, [[]]);
};

// Practical example
const elementsPowerSet = [1, 2, 3];
console.log(powerSet(elementsPowerSet));
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// 4. Partition an array based on a predicate function using reduce
const partition = (arr, predicate) => {
    return arr.reduce(
        ([pass, fail], elem) => predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]],
        [[], []]
    );
};

// Practical example
const numbersPartition = [1, 2, 3, 4, 5, 6];
const isEven = (num) => num % 2 === 0;
console.log(partition(numbersPartition, isEven));
// Output: [[2, 4, 6], [1, 3, 5]]

// 5. Combine two arrays into an array of tuples using reduce
const zipArrays = (arr1, arr2) => {
    return arr1.reduce((acc, item, i) => {
        if (i < arr2.length) {
            acc.push([item, arr2[i]]);
        }
        return acc;
    }, []);
};

// Practical example
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
console.log(zipArrays(array1, array2));
// Output: [[1, 'a'], [2, 'b'], [3, 'c']]

    
