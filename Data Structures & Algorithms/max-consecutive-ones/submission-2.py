class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        cur, ans = 0, 0
        for n in nums:
            if n == 1:
                cur += 1
            else:
                ans = max(ans, cur)
                cur = 0
        ans = max(ans, cur)
        return ans