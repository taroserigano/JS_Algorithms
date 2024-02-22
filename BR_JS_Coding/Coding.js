

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


    





    



  
