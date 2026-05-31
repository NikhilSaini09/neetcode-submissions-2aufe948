# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def __init__(self):
        self.__max_ps = float('-inf')
    
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        self.__max_ps = float('-inf')
        self.__helper(root)

        return self.__max_ps

    def __helper(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0

        left_max = max(0, self.__helper(root.left))        
        right_max = max(0, self.__helper(root.right))

        self.__max_ps = max(self.__max_ps, left_max + root.val + right_max)
        return max(left_max, right_max) + root.val;        