class Node { 
  constructor(key, val) { 
    this.key=key 
    this.val=val 
    this.prev = null 
    this.next = null 

  }
}


class LRUCache { 
  constructor(cap) { 
    this.cap=cap
    this.map = new Map() 

    this.left=new Node(0,0) 
    this.right=new Node(0,0) 

    this.left.next=this.right
    this.right.prev=this.left 
  } 

  get(key){
    if(this.map.has(key)){


      let node = this.map.get(key) 

      this.remove(node) 
      this.insert(node)
    
      return node.val 
    }
    return -1 

  } 

  insert(node){
    let cur = this.right.prev 

    cur.next = node  
    node.prev = cur 

    this.right.prev = node 
    node.next = this.right 

  }

  remove(node){

    let L = node.prev 
    let R = node.next 

    L.next = R 
    R.prev = L 

  } 

  put(key,val){
    if(this.map.has(key)){
      this.remove(this.map.get(key))
    } 

    let node = new Node(key, val)

    this.insert(node)
    this.map.set(key, node) 

    if(this.map.size > this.cap){ 
      let LRU = this.left.next 

      this.remove(LRU) 
      this.map.delete(LRU.key) 
    }

  }


}


