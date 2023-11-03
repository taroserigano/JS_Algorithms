













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

    















