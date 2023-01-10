var StockSpanner = function() {
    this.queue = []
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let curr = 0
    this.queue.push(price)
    for(let i = this.queue.length-1; i>=0;i--){
        if(this.queue[i] <= price){
            curr += 1
        }else{
            break
        }
    }
    return curr
    
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */