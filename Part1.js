
REVERSE 

function reverse(str) { 
    let res = "" 
    res = str.split('').reduce((a, b) => (b + a))
    // for(const char of str){ 
    //     res = char + res 
    // }
  console.log(res)   
}

reverse("abcde")



const reverse = (num) => { 
    
    let rev = 0;
    let minus = false 
    
    if(num < 0) {
        minus = true 
        num = num.toString().substring(1) 
        console.log(num)
        num = Number(num)
        console.log(num)
    }

    
    while(num!=0){ 
        
    rev = rev *10 + num % 10 
    
    num = Math.floor(num/10)
        
        
    }

    
    return minus ? "-" + rev  : rev
}

console.log(reverse(-133))





const rev2 = (n) => { 
    let rev
    let revStr=""
    if(n < 0) {
    rev = parseInt(n.toString().substring(1))
    console.log(rev)
    }
    
    rev = rev.toString() 
    
    for(let i=rev.length-1;i>=0; i--){ 
    
        revStr += rev[i]
        
    
    }
    if(n< 0) { 
        return (`-${revStr}`)}
    
    else return Number(revStr)
    
    
} 




--PALINDROME 

function palid(str) { 
const reversed = str.split('').reverse().join('') 
console.log(reversed == str) 
    
}
console.log("palindrome")
} 

palid("abda")



--REVERSE NUMBER

function reverseInt(num) { 
    
    const rev = num.toString().split('').reverse().join('') 
    
    if (num < 0){
        console.log(parseInt(rev) * -1)
    }
    console.log(parseInt(rev)) 
    
    }

reverseInt(51)


-- MAX CHAR  
function maxChar(str) { 
    
    const map = {};
    let count = 0;
    let res = '';
  
    for (let char of str) {
      map[char] = map[char] +1 || 1 
    }
  
    for (let char in map) {
      if (map[char] > count) {
        count = map[char];
        res = char;
      }
    }
  
    console.log(res);
 }

maxChar("hello hey me")


-- FIZZBUZZ 

function fizzBuzz(n) { 
for (let i = 1; i <= n: i++) { 

if (i % 3 === 0 && i % 5 === 0) { 
console.log("fizzbuzz") 
} else if (i % 3 == 0) { 
console.log("fizz") 
} else if (i % 5 == 0) { 
console.log("buzz") 
} else { 
console.log(i); 
}
}
}

-- BLOCK ARRAY 

function chunk(arr, size) { 

const block = [] 
let i = 0 

while (i < arr.length) { 
block.push(arr.slice(i, i + size))
i += size 
} 

console.log(block) 
} 


chunk([1,2,3,4,5,6,7], 3) 




--CAP

function cap(str) { 
    
    const words = [] 
    
    for (let word of str.split(' ')) { 
     words.push(word[0].toUpperCase() + word.slice(1))   
    }    
    console.log(words.join(' '))
}
 
 
 cap('i am very well')

-- STEPS

function steps(n) {

    for (let i = 0; i < n; i++){
        let stair ="" 
        
    for(let j = 0; j <= i;  j++){
        stair += "#"
    }
    
    console.log(stair)
}
}

steps(5)

-- PYRAMID 

function pyr(n) {
    for (let i = 0; i < n; i++) { 
     let str = ""
     for (let j = 1; j < n-i; j++){
         str += ' ' 
     }
     for (let k = 1; k <= (i * 2 + 1); k++){
     str += '*'
    }
    console.log(str)
}
}

pyr(5)


-- VOWELS 


function vowels(str) { 
    
 let count = 0 
 const checker = ['a', 'e', 'i', 'u', 'o'] 
 
 for (let s of str.toLowerCase() ) { 
   if (checker.includes(s)){
       count++
   }   
 }
    console.log(count)
}

vowels("this is so great")


--SPIRAL MATRIX 

function matrix(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push([]);
  }

  let count = 1;
  let left = 0;
  let right = n;
  let top = 0;
  let bottom = n;
  while (left < right && top < bottom) {
    // Top row
    for (let i = left; i < right; i++) {
      res[top][i] = count;
      count++;
    }
    top++;

    // Right column
    for (let i = top; i < bottom; i++) {
      res[i][right-1] = count;
      count++;
    }
    right--;
    
    

    // Bottom row
    for (let i = right-1; i > left-1; i--) {
      res[bottom-1][i] = count;
      count++;
    }
    bottom--;

    // start column
    for (let i = bottom-1; i > top-1; i--) {
      res[i][left] = count;
      count++;
    }
    left++;
  }

  console.log(res);
}

matrix(3)


--FIB

function fib(n) { 
if(n < 2) { 
return n 
} 

return fib(n-1) + fib(n-2)
} 




















































