class Solution:
    def maxCoins(self, nums: List[int]) -> int:
        n = len(nums)
        nums.insert(0, 1)
        nums.append(1)
        
        dp = [[0] * (n + 2) for _ in range(n + 2)]
        for i in range(n, 0, -1):
            for j in range(i, n + 1, 1):
                maxi = 0
                for k in range(i, j + 1, 1):
                    maxi = max(maxi, nums[i - 1] * nums[k] * nums[j + 1] + dp[i][k - 1] + dp[k + 1][j])
                dp[i][j] = maxi
        
        return dp[1][n]