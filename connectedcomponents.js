/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    
    //create graph
    //for each vertex in graph, if it is not seen +1 to ans. mark it and all its connections as seen
    //return ans
    let graph = new Map()
    let seen = new Array(n).fill(false)
    let ans = 0
    
    for(const [x,y] of edges){
        if(!graph.has(x)){
            graph.set(x, [])
        }
        if(!graph.has(y)){
            graph.set(y, [])
        }
        
        graph.get(x).push(y)
        graph.get(y).push(x)
    }
    
    function search(node){
        
        if(!seen[node]){
            ans++
            seen[node] = true
        }       
        for(const neighbor of graph.get(node)){
            if(!seen[neighbor]){
                seen[neighbor] = true
                search(neighbor)
            }

        }
    }

    for(let i=0; i<n; i++){
        if(!graph.has(i)){
            ans++
        }
        if(graph.has(i) && !seen[i]){
            search(i)
        }

    }
    return ans
    
};