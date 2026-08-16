class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const n = prices.length;
        if(n < 2) return 0;

        let dp0 = Math.max(0, prices[1] - prices[0]);
        let dp1 = Math.max(-prices[0], -prices[1]);
        let prev0 = 0;
        for(let i = 2; i < n; ++i) {
            const temp = dp0;
            dp0 = Math.max(dp0, dp1 + prices[i]);
            dp1 = Math.max(dp1, prev0 - prices[i]);
            prev0 = temp;
            // dp0 = cur0;
            // dp1 = cur1;
        }

        return dp0;
    }
}
