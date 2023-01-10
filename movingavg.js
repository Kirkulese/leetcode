/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.max = size
    this.queue = []
    this.sum = 0
 
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    this.sum += val
    if(this.queue.length > this.max){
        let sub = this.queue.shift()
        this.sum -= sub
    }
    return this.sum/this.queue.length

    
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */