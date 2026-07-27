class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        a, b = 0, 0

        for i in range(n):
            a, b = b, max(a + nums[i], b)
        
        return b