class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total & 1:
            return False

        target = total >> 1
        dp = 1
        for num in nums:
            dp |= dp << num
        return bool((dp >> target) & 1)
        
        
        
        
        
        # total = sum(nums)
        # if total % 2 != 0:
        #     return False
        # target = total >> 1

        # dp = [False] * (target + 1)
        # dp[0] = True
        # for n in nums:
        #     for j in range(target, n - 1, -1):
        #         dp[j] = dp[j] or dp[j - n]
        
        # return dp[target]