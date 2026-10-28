class Solution:
    def hammingWeight(self, n: int) -> int:
        ans = 0
        while n > 0:
            n = n & (n - 1)
            ans += 1
        return ans
        
        
        # ans = 0
        # for i in range(31):
        #     if (n & (1 << i)) != 0:
        #         ans += 1
        # return ans