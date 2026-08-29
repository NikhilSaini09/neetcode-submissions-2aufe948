class Solution:
    def jump(self, nums: List[int]) -> int:
        ans, far, end = 0, 0, 0
        for i in range(len(nums) - 1):
            far = max(far, nums[i] + i)
            if i == end:
                ans += 1
                end = far
        return ans