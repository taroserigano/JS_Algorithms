

// This is a JavaScript coding problem from BFE.dev 
/**

 */
function flat(arr, depth = 1) {
  // your imeplementation here
  let res = [] 

  arr.forEach(item => { 
    // if there's still array, break it 
    if(Array.isArray(item) && depth > 0){
      res.push(...flat(item, depth-1)) 
    }
    else res.push(item) 
  })
  return res 
}

--------------------------------------------------------------------

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const x = i + Math.floor(Math.random() * (arr.length - i))
    ;[arr[i], arr[x]] = [arr[x], arr[i]]
  }
}


------------


























