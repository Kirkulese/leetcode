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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(!root && val){
        return {val: val, left: null, right:null}
    }
    if(!root){
        return null
    }

    if(val > root.val){
        if(root.right){
            insertIntoBST(root.right, val)
        }else{
            root.right = {val: val, left: null, right:null}
        }
    }
    if(val < root.val){
        if(root.left){
            insertIntoBST(root.left, val)
        }else{
            root.left = {val: val, left: null, right:null}
        }
    }
    
    return root

};