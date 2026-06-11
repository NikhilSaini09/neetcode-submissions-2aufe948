class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        ans = []
        
        def backtrack(st: int):
            if st == len(nums):
                ans.append(nums[:])
                return
            
            for i in range(st, len(nums)):
                nums[st], nums[i] = nums[i], nums[st]
                backtrack(st + 1)
                nums[st], nums[i] = nums[i], nums[st]

        backtrack(0)
        return ans