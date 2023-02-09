/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(source == destination){
        return true
    }
    //build bidirectional graph
    let graph = new Map()
    for(let i=0;i<edges.length; i++){
        if(!graph.has(edges[i][0])){
            graph.set(edges[i][0], [])
        }
        if(!graph.has(edges[i][1])){
            graph.set(edges[i][1], [])
        }
        
        graph.get(edges[i][0]).push(edges[i][1])
        graph.get(edges[i][1]).push(edges[i][0])
        
    }
    
    let seen = new Set()
    let path = false
    
    const dfs = (node) => {
        //check if it satisfies the question
        if(node == destination){
            return true
        }
        //if this node hasnt been checked before, add it to seen then start dfsing its neighbors
        if(!seen.has(node)){
            seen.add(node)
            for(const neighbor of graph.get(node)){
                if(dfs(neighbor)){
                    return true
                }
            }
        }
        return false
    }
    
   
    return dfs(source)
    
};