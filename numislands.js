/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //function to check if node is within bounds and land ("1")
    //later we will declare m to be grid.length or the height and n to be grid[0].length or width
    let valid = (row, col) => {
        return 0 <=row && row < m && 0 <= col && col < n && grid[row][col] == "1"
    }

    //define search function
    let dfs = (row, col) => {
        //for each direction check if it is valid (meaning it is land) and unseen, then set seen to true
        //and search that nodes neighbors adding each land node to seen
        for(const [dx,dy] of directions){
            nextrow = row + dx
            nextcol = col + dy
            if(valid(nextrow, nextcol) && !seen[nextrow][nextcol]){
                seen[nextrow][nextcol] = true
                dfs(nextrow, nextcol)
            }
        }
    }

    //variable decs
    let m = grid.length
    let n = grid[0].length
    let seen = []
    //essentially the d pad to check neighbors in the grid
    let directions = [[0,1], [1,0], [0,-1], [-1,0]]
    //fill the seen array to mimic the shape of grid but all with false
    for(let i=0; i<m ; i++){
        seen.push(new Array(n).fill(false))
    }

    //start with node [0,0] and look for land, then dfs. each time the dfs begins ans +=1, if there is another "1" start a new search, once all nodes have been searched return ans

    let ans = 0
    for(let row=0; row<m; row++){
        for(let col=0; col<n; col++){
            if(valid(row,col) && !seen[row][col]){
                ans++
                seen[row][col] = true
                dfs(row, col)
            }
        }
    }
    return ans
};