Write a function to reverse a string.
Implement a function to check if a string is a palindrome.
Write a function to find the largest number in an array.
Create a function that returns the factorial of a number.
Write a function to merge two arrays and remove duplicates.
Implement a function to count the occurrences of each character in a string.
Write a function to find the common elements between two arrays.
Implement a function that returns the Fibonacci sequence up to a given number.
  
Write a function to flatten a nested array.

const flat = (arr) => {
    const res = []
    
    for(let i=0; i < arr.length; i++){ 
    if(Array.isArray(arr[i])) {
        res.push(...flat(arr[i]))
    }else{
        res.push(arr[i])
    }
    }
    return res  
} 

const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
console.log(flat(nestedArray));

  
Create a function to sum all numbers in an array.
  
Control Flow and Loops

Write a function to find the longest word in a string.

  

const flat = (str) => {
    str =str.split(" ")
    let res = ""
    for(let s of str){ 
    res = Math.max(res, s.length)    
    } 
    return res 
    
} 


const nestedArray = "I am so good and cooool"
console.log(flat(nestedArray));

  
Implement a function to find the missing number in an array of 1 to n.



const flat = (str) => {
    
    let set = new Set(str) 
    
    for(let i=1; i < str.length; i++){
        if(!set.has(i)) return i 
        set.add(i)
    }
    return -1 
    
} 


const nestedArray = [1,2,3,4,6,7]
console.log(flat(nestedArray));
  
Write a function to check if two strings are anagrams.  
Create a function to rotate an array to the right by k steps.

  

const flat = (arr, k) => {
    
    k = k% arr.length 
    
    res = [] 
    let tmp = [] 
    tmp = arr.splice(k)
    let r = arr.unshift(...tmp) // answer 1 
    console.log(arr)
    res.push(...arr)           // answer 2 
    return res
} 


const nestedArray = [1,2,3,4,5,6,7]
console.log(flat(nestedArray, 3));


  
Write a function to find the index of the first non-repeating character in a string. 



const flat = (arr) => {
    let map = new Map() 
    
    for(let s of arr){ 
        map[s] = map[s]+1 || 1 
    } 
    
    for(let s of arr){ 
    
        if(map[s] === 1) return s 
    }
    return -1 
} 


const nestedArray = "aabbbcccdbo"
console.log(flat(nestedArray, 3));
  
Implement a function to remove all falsy values from an array.

  function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

// Example usage
const arrayWithFalsyValues = [0, 1, false, 2, '', 3, 'a', null, 'b', undefined, 'c', NaN]; 


const filteredArray = removeFalsyValues(arrayWithFalsyValues);
console.log(filteredArray);  // Output: [1, 2, 3, 'a', 'b', 'c']
  
Write a function to convert a given number to binary.

  
Create a function to calculate the nth prime number.
  
Write a function to check if a number is prime.

Implement a function to find the GCD (Greatest Common Divisor) of two numbers.

  
  
Objects and Arrays

Write a function to clone an object.

  function shallowClone(obj) {
    return { ...obj };
}

// Example usage
const original = { a: 1, b: { c: 2 } };
const clone = shallowClone(original);

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Example usage
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone);  // Output: { a: 1, b: { c: 2 } }
  
Implement a function to merge two objects.
  
Write a function to deep merge two objects.
  
Create a function to get the values of an object as an array.
Write a function to get the keys of an object as an array.
Implement a function to check if an object is empty.
Write a function to compare two objects for equality.
Create a function to convert an array of objects into an object keyed by a specified property.
  
Write a function to remove a property from an object.

  function removeProperty(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
        delete obj[propertyName];
        return true; // Property successfully removed
    } else {
        return false; // Property doesn't exist in the object
    }
}

const isRemoved = removeProperty(exampleObject, propertyToRemove);

if (isRemoved) {
    console.log(`Property "${propertyToRemove}" removed:`, exampleObject);
} else {
    console.log(`Property "${propertyToRemove}" doesn't exist in the object.`);
}


Implement a function to freeze an object.
  
# Functional Programming
Write a function using map() to return an array of square roots of the given numbers.



const flat = (arr) => {
    return arr.map((n) => Math.sqrt(n))
} 
const nestedArray = [1, 4, 9, 16, 25];
console.log(flat(nestedArray));

  
Implement a function using filter() to return all even numbers from an array.
const flat = (arr) => {
    return arr.filter((n) => n % 2 === 0)
} 
const nestedArray = [1, 4, 9, 16, 25];
console.log(flat(nestedArray));
  
Write a function using reduce() to sum all numbers in an array.

  
  
Create a function using reduce() to group objects by a property.

  
const groupBy = (arr, property) => {
    
    return arr.reduce((arr, curr)=> { 
        
        let key = curr[property] 
        
        if(!arr[key]) arr[key] = []
        
        arr[key].push(curr) 
        
        return arr
        
    }, {})
}

const data = [
    { name: 'Alice', category: 'A' },
    { name: 'Bob', category: 'B' },
    { name: 'Charlie', category: 'A' },
    { name: 'David', category: 'B' },
    { name: 'Eve', category: 'A' }
];

const groupedData = groupBy(data, 'category');
console.log(groupedData);
  
Write a function using map() and reduce() to flatten an array of arrays.

  
const flat = (arr) => {
    
    return arr.reduce((acc, curr) => { 
        return acc.concat(curr)
    }, [])

}



const nestedArray = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = flat(nestedArray);

console.log(flattenedArray); // [1, 2, 3, 4, 5, 6]

  
Implement a function using some() to check if an array contains at least one odd number.

  
const flat = (arr) => {
    
    return arr.some((n) => n % 2 === 1)

}
  
Write a function using every() to check if all elements in an array are positive.

const flat = (arr) => {
    
    return arr.every((n) => n > 0)

}
  
Create a function using find() to get the first object with a specified property value.

const flat = (arr) => {
    
    return arr.find((n) => n === 2)

}
  
Write a function using findIndex() to get the index of the first element that matches a condition.

const flat = (arr) => {
    
    return arr.findIndex((n) => n === 2)

}

Implement a function using sort() to sort an array of objects by a property.

  
Asynchronous JavaScript

Write a function to fetch data from an API and log the result.
  // Define an asynchronous function to fetch data from an API
async function fetchData(apiUrl) {
    try {
        // Make the HTTP request using fetch
        const response = await fetch(apiUrl);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Log the result
        console.log(data);
    } catch (error) {
        // Handle and log any errors that occur during the fetch operation
        console.error('Error fetching data:', error);
    }
}

// Example usage: Fetch data from a sample API and log the result
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetchData(apiUrl);

Implement a function that uses async/await to handle promises.

  
Write a function to create a delay using setTimeout.

function delay(callback, milliseconds) {
    setTimeout(callback, milliseconds);
}

// Example usage of the delay function
function exampleUsage() {
    console.log('Delay starts');

    // Call the delay function with a callback and a delay of 2 seconds
    delay(() => {
        console.log('Delay ends');
    }, 2000);
}

// Call the example usage function to see the delay in action
exampleUsage();
  
Create a function to fetch multiple API endpoints and return the combined result.


const delay = (func, time) => { 
    setTimeout(func, time)
} 


function example(){ 
    delay (()=>{
        console.log("hi")
    }, 1000)
}
example()
  
Write a function to handle errors in an async function using try/catch.


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

const fetchDataWithErrorHandling = async (apiUrl) => { 
    
    try{ 
        const res = await fetch(apiUrl) 
        if(!res.ok){
            throw new Error("Error")
        } 
        
        const data = await res.json() 
        
        return data 
    } catch (err){
        console.log("url ERRO")
        throw err 
    }
    
}

fetchDataWithErrorHandling(apiUrl)
    .then(data => {
        // Do something with the data if needed
        console.log('Data processing completed:', data);
    })
    .catch(error => {
        // Handle errors that were rethrown from the fetchDataWithErrorHandling function
        console.error('An error occurred in the main flow:', error.message);
    });

Implement a function to throttle a function call.
  
Write a function to debounce a function call.
  
Create a function to sequentially execute an array of async functions.  
Write a function to execute multiple async functions in parallel.
Implement a function to retry a promise a specified number of times.
DOM Manipulation
Write a function to select an element by its ID and change its text content.
Implement a function to create a new DOM element and append it to the body.
Write a function to remove an element from the DOM.
Create a function to add a class to all elements with a specified class name.
Write a function to toggle a class on an element.
Implement a function to change the style of an element.
Write a function to get the value of an input field.
Create a function to set the value of an input field.
Write a function to handle a form submission and prevent the default action.
Implement a function to clone a DOM element.

  

Algorithms and Data Structures
Write a function to implement a binary search algorithm.
Implement a function to sort an array using quicksort.
Write a function to sort an array using mergesort.
Create a function to implement a linked list.
Write a function to traverse a binary tree.
Implement a function to find the height of a binary tree.
Write a function to perform a breadth-first search on a graph.
Create a function to perform a depth-first search on a graph.
Write a function to check if a binary tree is balanced.
Implement a function to detect a cycle in a graph.
  
Coding Challenges
Write a function to implement the LRU (Least Recently Used) cache.
Implement a function to generate all permutations of a string.
Write a function to solve the N-Queens problem.
Create a function to implement a basic calculator that supports addition, subtraction, multiplication, and division.
Write a function to find the longest increasing subsequence in an array.
Implement a function to solve the Knapsack problem.
Write a function to implement the Tower of Hanoi.
Create a function to find the shortest path in a maze.
Write a function to solve the Sudoku puzzle.
Implement a function to perform matrix multiplication.
  
Miscellaneous

Implement a function to find the median of two sorted arrays.

  const median = (a, b) => {
    //Sort the array
    let c = [...a, ...b].sort((a, b) => a - b);
    
    //Get the floor value
    const half = c.length / 2 | 0;
    
    //If odd then return middle element
    if (c.length % 2) return c[half];
    
    //If even then return the average of two mid elements
    return (c[half] + c[half - 1]) / 2;
}
