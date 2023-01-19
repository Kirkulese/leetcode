var closestValue = function(root, target) {
    if(!root){
        return null
    }
    let min = Infinity
    let ans = root.val
    var search = function(root, target){
        let curr = Math.abs(target - root.val)
        console.log(min, curr)
        if(curr < min){
            console.log(curr)
            min = curr
            ans = root.val
        }
        if(target > root.val){
            if(!root.right) return root.val
            search(root.right, target) 
        }
        if(target < root.val){
            if(!root.left) return root.val
            search(root.left, target)
        }        
    }    
    search(root, target)
    return ans
};