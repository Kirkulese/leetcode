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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root){
        return []
    }
    
    let ans = []
    let odd = true
    let queue = [root]
    
    while(queue.length){
        let curr = []
        let nextQ = []
        let currlength = queue.length
        
        if(odd){
            for(let i=0; i<currlength; i++){
                curr.push(queue[i].val)
                
                if(queue[i].left){
                    nextQ.push(queue[i].left)
                }
                if(queue[i].right){
                    nextQ.push(queue[i].right)
                }
            }
        }else{
            
            for(let i=0; i<currlength; i++){
                curr.unshift(queue[i].val)
                
                if(queue[i].left){
                    nextQ.push(queue[i].left)
                }
                if(queue[i].right){
                    nextQ.push(queue[i].right)
                }
            }
        }
        
        odd=!odd
        queue = nextQ
        ans.push(curr)
        
    }
    
    return ans
    
};