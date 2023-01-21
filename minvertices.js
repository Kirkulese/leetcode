/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    //create a set of all vertices n
    //create a map to represent the graph
    //iterate through the graph, if the node n-1 has an indegree of > 0 remove it from set
    //return all vertices left in set which should only have the nodes with 0 indegree

    let indegreeZero = new Set()
    for(i=0; i<n; i++){
        indegreeZero.add(i)
    }

    let graph = new Map()
    for(const [x,y] of edges){
        if(!graph.get(x)){
            graph.set(x, [])
        }
        graph.get(x).push(y)
    }

    for(i=0; i<n; i++){
        if(graph.get(i)){
            for(const dest of graph.get(i)){
                if(indegreeZero.has(dest)){
                    indegreeZero.delete(dest)
                }
            }
        }
    }
    

    let ans = []
    let zeros = indegreeZero.values()
    for(let m of zeros){
        ans.push(m)
    }

    return ans
    
};

