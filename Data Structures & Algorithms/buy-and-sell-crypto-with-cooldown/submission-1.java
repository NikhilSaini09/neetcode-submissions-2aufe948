class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length;
        if(n < 2) return 0;

        int dp0 = Math.max(0, prices[1] - prices[0]);
        int dp1 = Math.max(-prices[0], -prices[1]);
        int prev0 = 0, prev1 = -prices[0];

        for(int i = 2; i < n; ++i) {
            int cur0 = Math.max(dp0, dp1 + prices[i]);
            int cur1 = Math.max(dp1, prev0 - prices[i]);
            prev0 = dp0;
            prev1 = dp1;
            dp0 = cur0;
            dp1 = cur1;
        }

        return dp0;
    }
}
