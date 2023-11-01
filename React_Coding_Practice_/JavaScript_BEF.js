


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



---
  
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
  // your code here
  return new Promise((resolve, reject) => { 
    const res = [] 

    if(promises.length === 0) {
      resolve(res) 
      return }

      let count = promises.length 

      promises.forEach((promise, i) => { 
        Promise.resolve(promise).then((value) => { 
          res[i] = value 
          count-- 
          if(count === 0) {
            resolve(res) 
          }
        }, reject)
      })
  })







}

---------------------------

  const reverseLinkedList = (list) => {
  let node = list, prev = null;
  while (node !== null) {
    [node.next, node, prev] = [prev, node.next, node];
  }
  return prev;
}

-----------


  function binarySearch(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right)) / 2;

    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}


--------------

  find K largest in unsorted arr 

function findKThLargest(arr, k, L = 0, R = arr.length - 1) {
  const pivot = partition(arr, L, R);
  if (pivot === arr.length - k) return arr[pivot];
  if (pivot < arr.length - k) return findKThLargest(arr, k, pivot + 1, R);
  else return findKThLargest(arr, k, L, pivot - 1);
}

function partition(arr, L, R) {
  let pivot = L;
  for(let i = L; i < R; i++) {
    if (arr[i] < arr[R]) swap(i, pivot++, arr);
  }
  swap(pivot, R, arr);
  return pivot;
}

function swap(a, b, arr) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}

-----------------------------------------


class BrowserHistory {
  
  /**
   * @param {string} url
   * if url is set, it means new tab with url
   * otherwise, it is empty new tab
   */
  constructor(url) {
      this.history=[];
      this.pointer=0;
    if(url !== undefined){
        this.history.push(url);
    }
  }
  /**
   * @param { string } url
   */
  visit(url) {
    this.history.length=this.pointer+1;
    this.history.push(url);
    this.pointer++;
  }
  
  /**
   * @return {string} current url
   */
  get current() {
    return this.history[this.pointer];
  }
  
  // go to previous entry
  goBack() {
     this.pointer= Math.max(0, --this.pointer)
  }
  
  // go to next visited url
  forward() {
     this.pointer=Math.min(this.history.length-1, ++this.pointer)
  }
}



  

  

















