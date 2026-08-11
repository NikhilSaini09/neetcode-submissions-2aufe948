class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        ans = 0
        lis = []

        def lb(n: int) -> int:
            l, r = 0, ans - 1
            while l <= r:
                mid = l + (r - l) // 2
                if lis[mid] >= n:
                    r = mid - 1
                else:
                    l = mid + 1
            return l

        for n in nums:
            idx = lb(n)
            if idx == len(lis):
                ans += 1
                lis.append(n)
            else:
                lis[idx] = n

        return ans