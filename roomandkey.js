/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    //create a set to track rooms, every time we go to a room add it to the set
    //start in 0, grab keys go to those rooms, and repeat until no more unique keys
    let visited = new Set()
    const search = (room) => {
        for(const key of graph.get(room)){
            
            if(!visited.has(key)){
                visited.add(key)
                search(key)
            }
        }
    }

    //build a map to iterate
    let graph = new Map()

    let len = rooms.length
    for(let i=0; i<len;i++){
        if(!graph.has(rooms[i])){
            graph.set(i, [])
        }
        for(let j=0;j<rooms[i].length;j++){
            graph.get(i).push(rooms[i][j])
        }
        
    }


    visited.add(0)
    search(0)
    return visited.size == rooms.length



};