/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    //do BFS, record sum of current level, once while loop ends return last sum should be deepest leaves
    if(!root){
        return 0
    }
    let queue=[root]
    let lastSum = 0
    while(queue.length){
        let currSum = 0
        let nextQ = []
        
        let currLength = queue.length
        
        for(let i = 0; i<currLength; i++){
            currSum += queue[i].val
            if(queue[i].left){
                nextQ.push(queue[i].left)
            }
            if(queue[i].right){
                nextQ.push(queue[i].right)
            }
        }
        lastSum = currSum
        queue = nextQ
        
    }
    
    return lastSum
    
    
    
};