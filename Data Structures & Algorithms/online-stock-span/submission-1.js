class StockSpanner {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let res = 1;
        while(this.stack.length && this.stack[this.stack.length -1].price <= price){
            res += this.stack[this.stack.length - 1].res
            this.stack.pop()
        }
        this.stack.push({price,res})
        return res;

    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
