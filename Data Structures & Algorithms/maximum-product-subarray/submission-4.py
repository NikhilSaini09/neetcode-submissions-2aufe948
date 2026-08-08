class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        n, pre, suf, ans = len(nums), 1, 1, float('-inf')

        for i in range(n):
            pre *= nums[i]
            suf *= nums[n - i - 1]

            ans = max(ans, pre, suf)
            if pre == 0:
                pre = 1
            if suf == 0:
                suf = 1
        
        return ans