class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        sol = []

        def allSubsets(ind: int, temp: List[int]):
            sol.append(temp[:])

            for i in range(ind, len(nums)):
                if ind < i and nums[i] == nums[i - 1]:
                    continue
                
                temp.append(nums[i])
                allSubsets(i + 1, temp)
                temp.pop()
        
        allSubsets(0, [])
        return sol