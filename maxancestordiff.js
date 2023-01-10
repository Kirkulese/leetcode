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
var maxAncestorDiff = function(root) {
    if(!root){
        return 0
    }
    const helper = (node, max, min) => {
        if(!node){
            return max-min
        }
        let curr_max = Math.max(max, node.val)
        let curr_min = Math.min(min, node.val)
        let left = helper(node.left, curr_max, curr_min)
        let right = helper(node.right, curr_max, curr_min)
        return Math.max(left, right)
    }
    
    return helper(root, root.val, root.val)
    
    
};