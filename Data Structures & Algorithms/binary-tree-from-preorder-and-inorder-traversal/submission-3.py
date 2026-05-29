# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
        self.in_map = {val: i for i, val in enumerate(inorder)}
        self.p_idx = 0;

        def dfs(start: int, end: int) -> Optional[TreeNode]:
            if start > end:
                return None
            
            root_val = preorder[self.p_idx]
            cur = TreeNode(root_val)
            self.p_idx += 1

            mid = self.in_map[root_val]

            cur.left = dfs(start, mid - 1)
            cur.right = dfs(mid + 1, end)
            return cur
        
        return dfs(0, len(inorder) - 1)