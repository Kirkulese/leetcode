/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = []
    
    for(const c of s){
        if(stack.length){
            if(c.toLowerCase() == stack[stack.length-1] && c != stack[stack.length-1] || c.toUpperCase() == stack[stack.length-1] && c != stack[stack.length-1]){
                console.log(c, stack[stack.length-1])
                stack.pop()
            }else{
                stack.push(c)
            }
        }else{
            stack.push(c)
        }
        
    }
    return stack.join("")
};