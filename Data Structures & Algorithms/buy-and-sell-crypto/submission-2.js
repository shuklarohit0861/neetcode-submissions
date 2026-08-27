class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let maxProfit = 0;
        for (let r = 0; r < prices.length; r++) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxProfit = Math.max(maxProfit, profit);
            } else {
                l = r;
            }
        }
        return maxProfit;
    }
}
