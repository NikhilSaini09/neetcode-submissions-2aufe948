class Solution:
    def rob(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]
        if n == 2:
            return max(nums[0], nums[1])
        
        def help(l: int, r: int) -> int:
            a, b = 0, 0
            for i in range(l, r):
                a, b = b, max(a + nums[i], b)
            return b
        
        return max(help(0, n - 1), help(1, n))