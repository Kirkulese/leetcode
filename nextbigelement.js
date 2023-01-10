/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    //map nums2 elements to their next greatest
    // if that doesnt exist map to -1
    //iterate through nums1 push value map.has(nums1) to array and return
        let ng = new Map()
        let stack = []
        let ans = []
        for(const n of nums2){
            while(stack.length > 0 && n > stack[stack.length-1]){
                let temp = stack.pop()
                ng.set(temp, n)   
            }
            stack.push(n)
        }
        while(stack.length>0){
            let temp = stack.pop()
                ng.set(temp, -1)
        }
        for(const num1 of nums1){
            if(ng.has(num1)){
                ans.push(ng.get(num1))
                
            }
        }
        return ans
    
    };