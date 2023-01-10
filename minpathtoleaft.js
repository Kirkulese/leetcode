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
var minDepth = function(root) {
    let mindfs = root => {
        if(root == null){
            return 0
        }
        
        if(root.left == null && root.right == null){
            return 1
        }
        
        let mindepth = Infinity
        if(root.left != null){
            mindepth = Math.min(mindepth, mindfs(root.left))
        }
        if(root.right != null){
            mindepth = Math.min(mindepth, mindfs(root.right))
        }
        
        return mindepth + 1
    }
    
    return mindfs(root)
};