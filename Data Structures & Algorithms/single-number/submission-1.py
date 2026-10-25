class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        xr = 0
        for n in nums:
            xr ^= n
        return xr