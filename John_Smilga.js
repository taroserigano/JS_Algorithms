// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let str = "Write, Edit and Run your Javascript code using JS Online Compiler" 

const long = (s) => { 
s = s.split(" ") 
let max = 0
let res = ""
for(let w of s){
    if(w.length > max){
        res = w 
        max = w.length 
    }
}

return res
    
}

console.log(long(str));



---------

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr = [2,4,8] 

const counter = (arr) => { 
let arith = new Set() 
let geo = new Set() 

for(let i=1; i < arr.length;i++){

arith.add(arr[i] - arr[i-1])
geo.add(arr[i] / arr[i-1])
}

if(arith.size === 1) return "arith" 
if(geo.size === 1) return "geo"
    
}

console.log(counter(arr));


-----------

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let str = "I am very cool and cold"

function long(str) {
    let words = str.split(' ');
    let res = [];
    let size = 0;

    for (let i = 0; i < words.length; i++) {

        let word = words[i];
        if (word.length > size) {
            size = word.length;
            res = [word];
        } else if (word.length === size) {
            res.push(word) // res = [...res, word];
        }
    }

    return [...res];

}

console.log(long(str));


----------

array sum === sum 

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr = [1,2,3,4,10]

function sol(arr) {
    
    arr.sort((a,b) => a-b)
    let last = arr.pop() 
    
    let sum = arr.reduce((a,b) => a+b)
    return sum === last ? true : false 

}

console.log(sol(arr));


-----------------------------------

repeating nums in array 

function testRepeat(arr) {
    let mapNum = arr.reduce((acc, curr) => {
        if (acc.has(curr)) {
            acc.set(curr, acc.get(curr) + 1);
        } else {
            acc.set(curr, 1);
        }
        return acc;
    }, new Map());
    let result = { max: 1, number: -1 };
    mapNum.forEach((value, key) => {
        if (value > result.max) {
            result.max = value;
            result.number = key;
        }
    });
    return result.number;
}

const sol = arr => { 

    let map = arr.reduce((acc, cur) => { 
        
        acc.set(cur, (acc.get(cur) || 0) + 1)
        
        return acc
    }, new Map())    
    
    console.log(map)
    
    let res = -1  
    let max = 1
    
    // map.forEach((val, key) => { 
    //     console.log(val)
    //     if(val > max){
    //         max = val 
    //         res = key 
    //     }
    // })
    for(let [k, v] of map.entries()){
        console.log(k, v)
        if(v > max){
            max = v
            res = k
        }
    }
    
    return res
}



console.log(sol([1,2,3,4,1]))



----------------------------

2nd from beg and last 

let arr = [6,5,4,3,2,1,2,3,4] 

const sec = (arr) => { 

let vals = [...new Set(arr)].sort((a,b) => a - b) 

console.log(vals)

if(vals.length < 2){
    return vals[0]
} else if(vals.length === 2){
    return [vals[0], vals[1]]
} else{ 
    return [vals[1], vals[vals.length-2] ]
}  
    
}


console.log(sec(arr))















--------------------------------------

prime


const isPrime = (n) => { 
 if(n < 2) return false 
 
 let root = Math.ceil(Math.sqrt(n)) 

 
 for(let i=2; i<=root;i++){
     if(n % i === 0) 
        return false 
 }
    return true 
}


console.log(isPrime(11))



---------------------------

count chars


const count = (n) => { 

    n = n.split('') 
    let res = [] 
    let count = 1 
    let prev = ""
    
    for(let s of n){
        if(s === prev){
            count++
        } else{
            res += `${count}${s}` 
            count = 1 
            prev = s 
        }
    }
    return res 
    
}


console.log(count('aaabbbccccdd'))

-----------------------------

PALindrome

let s = "was it a car or a cats I saw" 
const pal = (s) => { 
let one = s.match(/[a-z0-9]/gi).join('').toLowerCase() 


console.log(one) 

for(let i=0;i<one.length/2;i++){
    console.log(one[i], one[one.length-i-1])
    if(one[i] !== one[one.length-1-i]) return false
}
return true


let sec = one.split('').reverse().join('') 

return one === sec

} 

console.log(pal(s))

































































