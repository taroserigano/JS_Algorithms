


const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]
let result = ['F', 'A', 'E', 'D', 'C', 'B']
// without: [ 'A', 'F', 'C', 'D', 'E', 'B' ]
function sort(items, newOrder) {
  // reorder items inline
  for(let i=0; i < newOrder.length; i++){

    while(newOrder[i] !== i) { 
      swap(items, i, newOrder[i]) 
      swap(newOrder, i, newOrder[i])
      console.log(items)
   }

  }

}

const swap = (arr, i, j) => { 
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

sort(A, B) 

console.log(B)





















