
/**
Input: n = 2
Output: 2
 */
var climbStairs = function(n) {

    let dp = [] 

    dp[1]=1 
    dp[2]=2 

    for(let i=3;i<=n;i++){
        dp[i] = dp[i-2] + dp[i-1] 
    }

    return dp[n]
    
};

/**
Input: cost = [10,15,20]
Output: 15
 */
var minCostClimbingStairs = function(cost) {

    let n = cost.length 

    for(let i=2; i < n; i++){
        cost[i] = Math.min(cost[i-2], cost[i-1]) + cost[i]
    } 

    return Math.min(cost[n-1], cost[n-2]) 

};


/**
Input: nums = [1,2,3,1]
Output: 4
 */
var rob = function(nums) {
    
    let sofar = attempt = 0 

    for(let n of nums){

        [sofar, attempt] = [attempt, Math.max(sofar + n, attempt) ]

    }

    return attempt
    
};




/**
Input: nums = [2,3,2]
Output: 3
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0] 

    return Math.max( 
        help(nums, 0, nums.length-2), 
        help(nums, 1, nums.length-1)
    )

};

const help = (nums, L, R) => { 
    let sofar = trying = 0 
    for(let i=L;i <= R;i++){ 
        [sofar, trying] = [trying, Math.max(sofar+nums[i], trying)]
    }

    return trying

} 


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let maxLen = 0 
    let start = 0 

    for(let L=0; L < s.length; L++){ 
        for(let R=L; R < s.length; R++){ 
            if(check(s, L, R)){
                if(R-L+1 > maxLen){ 
                    maxLen = (R-L+1) 
                    start = L 
                }
            }
        }
    } 
    return s.substring(start, start + maxLen)

    
}; 

const check = (s, L, R) => { 
    while(L<R) { 
        if(s[L++] !== s[R--]){
            return false 
        }
    }
    return true 
}


/**
Input: s = "abc"
Output: 3
 */
var countSubstrings = function(s) {
    let res = 0 

    const helper = (s, L, R) => { 

        while(L >= 0 && R <= s.length && s[L--] === s[R++]){
            res+=1
        }
    }

    for(let i=0; i < s.length;i++){
        helper(s, i, i) 
        helper(s, i, i+1)
    }
    return res
    
};




/**
Read the Number in Decoded way 
Input: s = "12"
Output: 2
 */
var numDecodings = function(s) {

    if(s[0] === "0") return  0 

    let dp = new Array(s.length+1)
    dp.fill(0) 

    dp[0] = 1 
    dp[1] = 1 

    for(let i=2; i <= s.length;i++){

        let a = Number(s.slice(i-1, i)) 

        if(a > 0 && a < 10) { 
            dp[i] += dp[i-1]
        }

        let b = Number(s.slice(i-2, i)) 

        if(b >= 10 && b <= 26) { 
            dp[i] += dp[i-2]
        }

    }

    return dp[s.length]

};



// e.g. '226'
// dp =
// [1, 1, 0, 0]
// [1, 1, 2, 0]
// [1, 1, 2, 3]
//
// e.g. '236'
// dp =
// [1, 1, 0, 0]
// [1, 1, 2, 0]
// [1, 1, 2, 2]




/**
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
 */
var coinChange = function(coins, amount) {

    let dp = new Array(amount+1) 
    dp.fill(Infinity) 
    dp[0] = 0 

    for(let target=0; target<=amount;target++){
        for(let coin of coins){ 
            if(target >= coin ) { 
                dp[target] = Math.min(dp[target], dp[target-coin]+1)
            } 
        }
    }

    return dp[amount] != Infinity ? dp[amount] : -1 

    
};





// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true

var wordBreak = function(s, wordDict) {
    
    let dp = new Array(s.length+1).fill(false) 

    dp[0] = true 

    for(let i=0; i < s.length; i++) { 
        if(dp[i] === true) { 
            for(let word of wordDict){ 
                if(s.slice(i, i + word.length) === word){
                    dp[i + word.length] = true 
                }
            }
        }
    }
    return dp[s.length]

};



/**
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
 */
var lengthOfLIS = function(nums) { 

    let dp = new Array(nums.length).fill(1) 
    let maxLen = 1 

    for(let R=1; R < nums.length; R++){
        for(let L=0; L < R; L++){
            
            // increasing num found, add +1   - L: new R: existing(1)
            if(nums[L] < nums[R]){                 

                dp[R] = Math.max(dp[R], dp[L]+1) 
            }
        }
        maxLen = Math.max(maxLen, dp[R])
    }
    console.log(dp)
    return maxLen 
    
};



// nums = [ 0 ,1, 0, 3, 2, 3 ]
// dp =   [ 1, 2, 1, 3, 3, 4 ]


/**
Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
 */
var canPartition = function(nums) {

    let sum = nums.reduce((a,b) => a +b, 0) 

    let dp = [] 

    dp[0] = true  

    for(let num of nums){

        for(let i = sum /2; i >= 0; i--) { 

            dp[i] = dp[i] || dp[i-num] 

        }
    }

    return dp[sum / 2] || false
    
};




































