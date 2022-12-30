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
var diameterOfBinaryTree = function(root) {
    if(!root) return 0
    let max = 0
    //helper function to calculate diameters of tree, updating global variable
    //after the function finishes return max diameter (global variable)
    const diameterSearch = (node) => {
        //check if left + right is > max diameter and update global variable
        // return the greatest of (left || right) + 1
    
        if(!node) return 0        

        let left = diameterSearch(node.left)
        let right = diameterSearch(node.right)
        
        let diameter = left + right
        max = Math.max(max, diameter)
        
        return Math.max(left, right)+1
    }
    
    diameterSearch(root, 0, 0)
    return max
};