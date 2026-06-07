class Solution:
    def __init__(self):
        self.ans = []

    def subsets(self, nums: List[int]) -> List[List[int]]:
        path = []
        self.dfs(nums, path, 0)
        return self.ans;

    def dfs(self, nums: List[int], path: List[int], idx: int):
        self.ans.append(path[:])

        for i in range(idx, len(nums)):
            path.append(nums[i])
            self.dfs(nums, path, i + 1)
            path.pop()