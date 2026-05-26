# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        # return self.__dfs(root, float('inf'))
        return self.__dfs(root, -150)

    def __dfs(self, root: TreeNode, high: int) -> int:
        if not root:
            return 0
        
        cur = 1 if root.val >= high else 0

        high = max(high, root.val)
        return cur + self.__dfs(root.left, high) + self.__dfs(root.right, high)