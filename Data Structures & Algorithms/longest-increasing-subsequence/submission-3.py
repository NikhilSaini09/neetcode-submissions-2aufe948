import bisect

class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        temp = []
        temp.append(nums[0])
        for num in nums[1:]:
            if num > temp[-1]:
                temp.append(num)
            else:
                idx = bisect.bisect_left(temp, num)
                temp[idx] = num
        return len(temp)
                
        
        
        # ans = 0
        # lis = []

        # def lb(n: int) -> int:
        #     l, r = 0, ans - 1
        #     while l <= r:
        #         mid = l + (r - l) // 2
        #         if lis[mid] >= n:
        #             r = mid - 1
        #         else:
        #             l = mid + 1
        #     return l

        # for n in nums:
        #     idx = lb(n)
        #     if idx == len(lis):
        #         ans += 1
        #         lis.append(n)
        #     else:
        #         lis[idx] = n

        # return ans