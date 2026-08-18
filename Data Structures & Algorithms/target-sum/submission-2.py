class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        total = sum(nums)
        target = abs(target)
        rem = total - target
        if rem < 0 or rem % 2 != 0:
            return 0
        
        k = rem >> 1
        dp = [0] * (k + 1)
        dp[0] = 1

        for num in nums:
            for i in range(k, num - 1, -1):
                dp[i] += dp[i - num]
        
        return dp[k]