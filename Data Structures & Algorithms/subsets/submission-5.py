class Solution:
    def subsets(self, nums: list[int]) -> list[list[int]]:
        self.answer = []
        
        def backtrack(start: int, path: list[int]):
            self.answer.append(path[:])
            
            for i in range(start, len(nums)):
                path.append(nums[i])
                backtrack(i + 1, path)
                path.pop()

        backtrack(0, [])
        return self.answer

    # def __init__(self):
    #     self.ans = []

    # def subsets(self, nums: List[int]) -> List[List[int]]:
    #     path = []
    #     self.dfs(nums, path, 0)
    #     return self.ans;

    # def dfs(self, nums: List[int], path: List[int], idx: int):
    #     self.ans.append(path[:])

    #     for i in range(idx, len(nums)):
    #         path.append(nums[i])
    #         self.dfs(nums, path, i + 1)
    #         path.pop()