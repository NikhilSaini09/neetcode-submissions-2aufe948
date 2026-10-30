class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        xr, xa = 0, 0
        for i in range(len(nums)):
            xr ^= nums[i]
            xa ^= (i + 1)
        return xr ^ xa