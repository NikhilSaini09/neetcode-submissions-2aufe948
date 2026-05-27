# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def __init__(self):
        self.__prev = float('-inf')

    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True
        
        if not self.isValidBST(root.left):
            return False

        if root.val <= self.__prev:
            return False
        self.__prev = root.val

        return self.isValidBST(root.right)