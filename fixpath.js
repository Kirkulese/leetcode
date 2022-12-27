/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let parts = path.split("/")
    console.log(parts)
    for(const p of parts){
        if(p=="." || p==""){
            
        }else if (p==".."){
            stack.pop()
        }else{
            console.log(p)
            stack.push(p)
        }
    }
    
    return "/" + stack.join("/")
    
};