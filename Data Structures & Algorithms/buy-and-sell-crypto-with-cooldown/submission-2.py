class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        n = len(prices)
        if n < 2:
            return 0

        dp0 = max(0, prices[1] - prices[0])
        dp1 = max(-prices[0], -prices[1])
        prev0, prev1 = 0, -prices[0]

        for i in range(2, n):
            cur0 = max(dp0, dp1 + prices[i])
            cur1 = max(dp1, prev0 - prices[i])
            prev0, prev1, dp0, dp1 = dp0, dp1, cur0, cur1
        
        return dp0