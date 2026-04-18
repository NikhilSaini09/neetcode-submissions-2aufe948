class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let ans = 0, n = prices.length;
        let minPrice = prices[0];

        for(let i = 1; i < n; ++i) {
            minPrice = Math.min(minPrice, prices[i]);
            ans = Math.max(ans, prices[i] - minPrice);
        }

        return ans;
    }
}
