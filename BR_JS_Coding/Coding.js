

-

  const calc = (n1, n2, ope) => { 
    
    let res=0 
    
    if(ope === "+"){ 
     res = n1 + n2    
    } else if(ope === "-"){ 
        res = n1-n2 
    } else if(ope === "*"){
        res = n1*n2 
    } else if(ope==="/"){
        res = n1/n2 
    } else{
        throw new Error()
    }
    
    return res 
} 

---------------------------------------

  const count = (str, char) =>{ 
    
    let count = 0 
    
    for(let i=0; i<str.length; i++){
        if(str[i] === char){
            count++ 
        }
    }
    
    return count 
}
----------------------------

// Solution 2
function findMaxNumber(arr) {
  // Declare a variable to store the maximum number. We can initialize it to the first element in the array
  let max = arr[0];

  // Loop through the array starting at the second element. We start at the second element because we already set the maximum number to the first element
  for (let i = 1; i < arr.length; i++) {
    // If the current element is greater than the maximum number, set the maximum number to the current element
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Return the maximum number
  return max;
}

=-------------------------------

const titleCase = (str) => { 
    
    const words = str.toLowerCase(' ') 
    
    for(let i=0; i < words.length; i++){ 
        words[i] = words[i][0].toUpperCase() + words[i].slice(1) 
        
        return words.join(" ")
} 



  -------------------
const rev = (str) => { 
    
    let reversed = "" 
    
    for(let i=str.length-1; i>= 0; i--){ 
        
        reversed += str[i] 
        
    }
    return reversed 
} 

  -----------------------------------
// Solution 1
function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert the string to lowercase
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Reverse the string
  const reversedStr = formattedStr.split('').reverse().join('');
  // Return whether the formatted string is equal to the reversed string
  return formattedStr === reversedStr;
}

  ----------------------------------------------------

    const countVowels = (str) => { 
    const matched = str.match(/[aeiuo]/gi
                              
    if(matched){ 
      return  matched.length 
    } else{ 
      return 0 
    } 
  } 

  ------------------------------------------------------
    
const arr = [1, 2, 3, 4, 5, 1, 2, 3];

const removeDupe = (arr) => { 
    const unique = [] 
    for(let n of arr){ 
       if(unique.includes(n)){
           unique.push(n)
       }
        
    }
    return unique
} 

  ---------------------------------------
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
  
function findIntersection(arr1, arr2) { 
 
 const res = [] 
 
 for(let n of arr1){
 if(arr2.includes(n)){
     res.push(n)
 }
 }
 
 return res 
    
}

  -----------------------------------------------
function displayLikes(names) {
  // Get the length of the array
  const length = names.length;

  // Return the appropriate string based on the length of the array
  if (length === 0) {
    return 'no one likes this';
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}


  -------------------------------------------

    function findMissingNumber(arr) {
  // Calculate the sum of the first n natural numbers
  let sum = 0;
  for (let i = 1; i <= arr.length + 1; i++) {
    sum += i;
  }

  // Find the sum of the elements in the array
  let arraySum = 0;
  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }

  // Subtract the sum of the elements in the array from the sum of the first n natural numbers
  // to find the missing number
  return sum - arraySum;
}

// Example usage:
const arr = [1, 2, 3, 5, 6, 7];

  --------------------------------------

    function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (!arr.includes(alphabet[i])) {
      return alphabet[i];
    }
  }
  return undefined;
}

const arr = ["a", "b", "c", "d", "f", "g"];

  ----------------------------------------------

function nonRepeatingChar(str){ 
 
 const map = {} 
 
 for(let c of str){ 
     map[c] = map[c]+1 || 1 
 } 
 
 for(let c of str){ 
     if(map[c] === 1)
     return c
 }
    
    
}
------------------------------------------
function format(num){ 
    
    const cleaned = num.replace(/\D/g, "") 
    
    if(cleaned.length < 10 || cleaned.length > 11){
        return "Invalid"
    } 
    
    const formated = `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)} - ${cleaned.slice(6)} `
    
    return formatted }
   const phoneNumber = '1234567890';


  -----------------------------------------

    

  


    
    
    





    



  
