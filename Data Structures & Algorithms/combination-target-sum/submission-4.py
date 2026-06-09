class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        ans = []
        temp = []

        def generate_combination(rem: int, ind: int):
            if rem == 0:
                ans.append(temp[:])
                return
            
            if rem < 0 or ind == len(nums):
                return
            
            temp.append(nums[ind])
            generate_combination(rem - nums[ind], ind)
            temp.pop()

            generate_combination(rem, ind + 1)
        
        generate_combination(target, 0)
        return ans