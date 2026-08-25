class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans, cur = float('-inf'), 0
        for n in nums:
            cur = max(n, cur + n)
            ans = max(ans, cur)
        return ans