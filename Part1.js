
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

--PALINDROME 

function palid(str) { 
// const reversed = str.split('').reverse().join('') 
// console.log(reversed == str) 
    for ( let i=0; i < str.length / 2; i++) { 
        if (str[i] !== str[str.length-1 -i]){
            console.log(" not valid")
        }       
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
      if (!map[char]) {
        map[char] = 1;
      } else {
        map[char]++;
      }
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
         str = str + ' ' 
     }
     for (let k = 1; k <= (i * 2 + 1); k++){
     str += '*'
    }
    console.log(str)
}
}

pyr(5)






































