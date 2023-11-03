


/**
Input: s = "()[]{}"
Output: true
 */
var isValid = function(s) {
        let map = { "(":")", "{":"}","[":"]" }
    let stk = [] 

    for(let c of s) { 
        if(map[c]) {
            stk.push(c)
        } else if(map[stk.at(-1)] === c){
            stk.pop() 
        } else{ 
            return false 
        }
    }
    return stk.length === 0 


};


/** An integer x.
Record a new score of x.
'+'. plus 
'D'.: double 
'C'. : pop 
Input: ops = ["5","2","C","D","+"]
Output: 30
 */
var calPoints = function(ops) {
    let res = [] 

    for(let o of ops){

        if(o === "+"){ 
            res.push(res[res.length-1] + res[res.length-2]) 
        } else if(o === "D"){
            res.push(res[res.length-1] * 2)
        } else if(o === "C") {
            res.pop() 
        } else {
            res.push(parseInt(o))
        }

    }
    return res.reduce((a,b) => a+b, 0)

};





// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

class MyStack { 
    constructor(){
        this.q=[] 
    }

    push(x){ 
        this.q.push(x) 
        for(let i=0; i < this.q.length-1; i++){
            this.q.push(this.q.shift()) 
        }
    }

    pop(){
        return this.q.shift()
    }

    top(){
        return this.q[0]
    }
    empty(){
        return this.q.length === 0
    }



}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */




// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

var MinStack = function() {
    this.stack=[]
    this.minStack =[] 
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val) 

    if(this.minStack.length) {
        val = Math.min(val, this.minStack[this.minStack.length-1])
    }
    this.minStack.push(val )
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop() 
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
    };

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */




/**
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
 */
var evalRPN = function(tokens) {
    let stack = [] 
    let ops = {
        '+': (a,b) => a + b, 
        '-': (a,b) => a-b, 
        '*': (a,b) => a*b, 
        '/': (a,b) => a/b >= 0 ? Math.floor(a/ b) : Math.ceil(a/b)
    }  

    for(let t of tokens){
        if(ops[t]){
        let top = stack.pop() 
        let second = stack.pop() 

        stack.push(ops[t](second, top)) 
    } else{
        stack.push(Number(t))
    }
    }
    return stack.pop() 
    





    
};



/**
Input: s = "leet**cod*e"
Output: "lecoe"
 */
var removeStars = function(s) {

    let stk = [] 

    for(let c of s){
        if(c === "*" && stk.length){
            stk.pop() 
        } else{
            stk.push(c)
        }
    }
    return stk.join('')
    
};


/**
Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 */
var validateStackSequences = function(pushed, popped) {

    let stack = [] 
    let i = 0 

    for(let p of pushed){
        stack.push(p) 

        while(stack.length && stack.at(-1) === popped[i]) {
            stack.pop()
            i++
    }
    }
    return stack.length === 0 

    
};



/**
Input: n = 1
Output: ["()"]
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
 */
var generateParenthesis = function(n) {

    let res = [] 

    const bkt = (L, R, s) => { 
        if(L === n && R === n){
            res.push(s) 
            return 
        }

        if(L<n){
            bkt(L+1, R, s + "(")
        }

        if(R < L){
            bkt(L, R+1, s+")")
        }
    }
    bkt(0, 0, "") 
    return res 
};


/**
asteroids = [5,10,-5]  
+ moves ---> 
- moves <--- 
 */
const asteroidCollision = (aster) => {
    let stack = [];

    for (a of aster) {

        // a is minus and move <==, ==> is larger than 0, they will collide 
        while (stack.length && stack.at(-1) > 0 && a < 0) {

            let diff = a + stack.at(-1);

            if (diff < 0) { // left val ws bigger 
                stack.pop();
            } else if (diff > 0) {
                a = null;
            } else if(diff ===0){
                a = null;
                stack.pop();
            }
        }

        if (a) {
            stack.push(a);
        }
    }

    return stack;
};




/**
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
 */
var dailyTemperatures = function(temp) {
    
    let stack = [] 
    let res = new Array(temp.length).fill(0) 

    for(let i=0; i < temp.length; i++){

        // if current num is bigger  
        while(stack.length && temp[i] > temp[stack.at(-1)]){

            // extract pos  
            let pos = stack.pop() 
            res[pos] = i - pos; 
        }
        stack.push(i)
    }
    return res


};



// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]


class StockSpanner  {

    constructor(){ 
        this.st = [] 
    } 

    next(price){
        let pos = 1 
        while(this.st.length && this.st.at(-1)[1] <= price){
            pos += this.st.pop()[0] 
        }

        this.st.push([pos, price]) 

        return pos 



    }

    
}



/**
 *  O(NlogN) Quick sort the cars by pos. (Other sort can be applied)
    O(N) One pass for all cars from the end to start (another direction also works).

    O(N) Space for sorted cars.
    O(1) space is possible if we sort pos inplace.
    target = 12, pos = [10,8,0,5,3], speed = [2,4,1,1,3]
 */
var carFleet = function(target, pos, speed) {
    let map = new Map()
    let res = 0, lastTime = -1; // last car's pos 
    
    // store car pos and its speed
    for(let i = 0; i < pos.length; i++){
        map.set(pos[i], speed[i]);
    }
    
    // bigger positions first 
    const sortedPos = [...map.keys()].sort((a, b) => b - a);  // [ 10, 8, 5, 3, 0 ]

    console.log(sortedPos)
    
    // compete curTime to take till target 
    for(let s of sortedPos){
                 // target - position     /             speed
                 // how close to target initially  /  speed 
        let curTime = (target - s) / map.get(s);
        
        // slower car found, so add this another car to res 
        if(curTime > lastTime){ 
            res++;
            lastTime = curTime;
        }
    }
    
    return res;
};




/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    const res = [] 
    let str = path.split("/")

    for(let s of str){

        if(s === "." || s === '') continue 

        else if(s === "..") res.pop() 

        else res.push(s)

    }

    return "/" + res.join("/")
    
};



/**
Input: path = "/home/"
Output: "/home"
Input: path = "/../"
Output: "/"
 */
var simplifyPath = function(path) {

    const res = [] 
    let str = path.split("/")

    for(let s of str){

        if(s === "." || s === '') continue 

        else if(s === "..") res.pop() 

        else res.push(s)

    }

    return "/" + res.join("/")
    
};


/**
Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
 */
var decodeString = function(s) {

    let stack = [] 

    for(let c of s){

        if(c != "]"){
            stack.push(c)
        }

        else{ 
            let str = "" 

            // until hit "["
            while(stack && stack.at(-1) != '[') {
                str = stack.pop() + str 
            }

            stack.pop() // pop "[" 

            let k = "" 

            // add all numbers 
            while(stack && !isNaN(stack.at(-1))){
                k = stack.pop() + k
            }

            stack.push(str.repeat(k))

        }



    }
    return stack.join("")
    
};


/**
Input: num = "1432219", k = 3
Output: "1219"
 */
var removeKdigits = function(num, k) {

    let st = [] 

    for(let n of num){

        while(st && st.at(-1) > n && k != 0){
            st.pop()
            k-- 
        }
        st.push(n)
    }

        while(st && k!=0) {
            st.pop() 
            k-- 
        } 

        while(st && st[0] === "0"){
            st.shift() 
        }

    return st.join("") || "0"      

    

    
};

/**
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
 */
var removeDuplicates = function(s, k) {
    let stack = [] 

    for(let c of s){

        // same char found 
        if(stack.length && stack.at(-1)[0] === c){
            stack.at(-1)[1] += 1 

            if(stack.at(-1)[1] === k) { 
                stack.pop() 
            }
        } else { 
            stack.push([c, 1]) 
        }
    }

    let res = '' 

    for(let [char, count] of stack){
        res += char.repeat(count)
    }

    return res 

};


/*

1. find LESS - than nums[i] 
2. find LESS - than "m"
Input: nums = [1,2,3,4]
Output: false
*/ 


var find132pattern = function(nums) {
    let stk = [] 
let m = -Infinity 
    for(let i=nums.length-1;i>=0;i--){

        while(stk && stk.at(-1) < nums[i]){
            m = stk.pop() 
        }

        if(nums[i] < m) {
            return true 
        }

        stk.push(nums[i])
    }
    return false
};



/**
Input: heights = [2,1,5,6,2,3]
Output: 10
 */
var largestRectangleArea = function(heights) {
    
    heights.push(0)  
    let stack = [];
    let res = 0;

    for (let i = 0; i < heights.length; i++) {

        let start = i;

        // stack height > current  
        while (stack.length && stack.at(-1)[1] > heights[i]) {
                let [pos, height] = stack.pop();
                res = Math.max(res, (i - pos) * height);
                start = pos 
            }

        stack.push([start, heights[i]]);   // [start, height]
    }
    
    // to pick up leftover 
    // for(let[i, hei] of stack){
    //     res = Math.max(res, (heights.length - i) * hei)
    // }

    return res;
};














































/**
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
 */
var flatten = function(root) {
    let prev = null 
    
    const dfs = (node) => { 
        if(node.right) dfs(node.right) 
        if(node.left) dfs(node.left) 

        node.left = null 
        node.right = prev 
        prev = node 
    }
    if(root) dfs(root )
};


// 1. keep going right until the bottom 
// 2. then, cut off node.left
// 3. replace prev to previous Node
// 4. connect node.right to that previous node

/**
Input: s = "cbacdcbc"
Output: "acdb"
Delete if char is:
1. smaller in lexico,
2. duplicate chars 
 */
var removeDuplicateLetters = function(s) {
        let stack = [];
        let seen = new Set();
        let lastOcc = {};
        for (let i = 0; i < s.length; i++) {
            lastOcc[s[i]] = i;
        }
        
        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            if (!seen.has(c)) {

                while ( 
                stack.length && 
                c < stack[stack.length - 1] &&
                i < lastOcc[stack[stack.length - 1]]) {
                    seen.delete(stack.pop());
                }
                seen.add(c);
                stack.push(c);
            }
        }
        
        return stack.join('');
    }


/**
Input: s = "leet2code3", k = 10
Output: "o"
Explanation: The decoded string is "leetleetcodeleetleetcodeleetleetcode".
The 10th letter in the string is "o".
 */

var decodeAtIndex = function(s, k) {
    
    let count = 0;

    for (let i = 0; i < s.length; i++) {

        // if it's a number, multiply 
        if (!isNaN(s[i])) count *= Number(s[i])

        // char, add 1 
        else count++
    }
   
    // divide by numbers like 36 -> 12 -> 11 -> 10 
    for (let i = s.length - 1; i >= 0; i--) {
        
        // when count hits 10, k = 0 
        k = k % count;

        // not a number 
        if (k == 0 && isNaN(s[i])) return s[i]
        
        // number found, divide 
        if (!isNaN(s[i])) count = Math.ceil(count / Number(s[i]))
        
        // char found 
        else count--;
    }
};

----------------------------

    















