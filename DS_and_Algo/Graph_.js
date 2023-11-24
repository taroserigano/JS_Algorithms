

/**
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
 */
var cloneGraph = function(node) {

    const dfs = (node, visit) =>{

        if(visit.has(node)) return visit.get(node)

        let newNode = new Node(node.val) 

        visit.set(node, newNode) 

        for(let nei of node.neighbors){
            newNode.neighbors.push(dfs(nei, visit))
        }

        return newNode

    }

    if(!node) return null 
    return dfs(node, new Map())
    
};






// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3

// Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
// Output: 3

var minReorder = function (n, connections) {
  
  // start from zero 
  const dfs = (node) => {

    for (const [city, goZero] of graph[node]) {

      if (map[city]) continue;
      
      // if direction is not towards 0, add count +1 
      if (!goZero) count++;
      
      // because coming from "0"
      map[city] = true;

      dfs(city); 
    }
  } 

  let graph = [];
  
  // will track if each node can reach to "0" or not 
  const map = Array(n).fill(false);
  map[0] = true;

  // prepare for each node/city
  // { '0': [], '1': [], '2': [], '3': [], '4': [], '5': [] }
  for (let i = 0; i < n; i++) 
        graph[i] = []; 

  // connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
  for (const [origin, destination] of connections) {
    graph[origin].push([destination, false]);
    graph[destination].push([origin, true]);
  }

  let count = 0;
  dfs(0);

  return count;

};

// {
//   '0': [ [ 1, false ], [ 4, true ] ],
//   '1': [ [ 0, true ], [ 3, false ] ],
//   '2': [ [ 3, false ] ],
//   '3': [ [ 1, true ], [ 2, true ] ],
//   '4': [ [ 0, false ], [ 5, false ] ],
//   '5': [ [ 4, true ] ]
// }














