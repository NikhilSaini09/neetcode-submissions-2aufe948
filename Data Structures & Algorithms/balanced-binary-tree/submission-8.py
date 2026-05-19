# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        return self.__helper(root) != -1
    
    def __helper(self, node: Optional[TreeNode]) -> int:
        if not node:
            return 0

        lh = self.__helper(node.left)
        if lh == -1:
            return -1
        rh = self.__helper(node.right)
        if rh == -1:
            return -1
        
        if abs(rh - lh) > 1:
            return -1

        return 1 + max(lh, rh)