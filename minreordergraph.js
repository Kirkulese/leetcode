/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    //convert to tuple function
    const tuplify = (row, col) => {
        return row + ',' + col
    }

    //create recursive search function
    const dfs = (node) => {
        let ans = 0
        for(const child of graph.get(node)){
            //if the node hasnt been visited add it to seen, then check if its path is in roads
            //if it is in roads then it needs to be reversed so we increment ans
            if(!seen[child]){
                if(roads.has(tuplify(node,child))){
                    ans++
                }
                seen[child] = true
                ans += dfs(child)
            }
            
        }
        console.log('node:' + node, '|', 'ans:' + ans)
        return ans
    }

    //build the graph as an undirected graph
    //create a set to contain existing road connections for lookup later
    
    let roads= new Set()
    let graph = new Map()
    let seen = new Array(n).fill(false)

    //fill in empty graph
    for(let i =0; i<n; i++){
        graph.set(i, [])
    }
    for(const [x,y] of connections){
        //create undirected graph
        graph.get(x).push(y)
        graph.get(y).push(x)

        //add connection to roads
        roads.add(tuplify(x,y))
    }

    //make sure to return the DFS result otherwise output will be undefined as nothing comes out of wrapper function
    seen[0] = true
    return dfs(0)

};

