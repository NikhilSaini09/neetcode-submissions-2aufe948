class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = 0
        for n in nums:
            total += n
        
        if total % 2 != 0:
            return False
        target = total >> 1

        dp = [False] * (target + 1)
        dp[0] = True

        for n in nums:
            for j in range(target, n - 1, -1):
                dp[j] = dp[j] or dp[j - n]
        
        return dp[target]