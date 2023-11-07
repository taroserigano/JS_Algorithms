
/**
[[1,1,0,0,0],[1,1,1,1,0],[1,0,0,0,0],[1,1,0,0,0],[1,1,1,1,1]]
 */
var kWeakestRows = function(mat, k) {
    // [ [ 2, 0 ], [ 4, 1 ], [ 1, 2 ], [ 2, 3 ], [ 5, 4 ] ]
    let rowStrengths = mat.map((row, i) => [row.reduce((a, b) => a + b, 0), i]);
    
    // Sort - [ [ 1, 2 ], [ 2, 0 ], [ 2, 3 ], [ 4, 1 ], [ 5, 4 ] ]
     rowStrengths.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    // Extract the first k indices
    return rowStrengths.slice(0, k).map(([_, i]) => i);
};


/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let L = 0;
    let R = arr.length - 1;

    while (L <= R) {
        let m = Math.floor((L + R) / 2);

        if (arr[m] < arr[m + 1]) {
            L = m + 1;
        } else {
            R = m-1;
        }
    }

    return L;    
};



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    const set1 = new Set(nums1) 
    const set2 = new Set(nums2) 

    const res = [] 

    for(let val of set1){
        if(set2.has(val)) 
            res.push(val)   
    }

    return res 

    
};






























