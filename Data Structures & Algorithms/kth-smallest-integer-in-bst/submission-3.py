# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        st = []
        cur = root

        while True:
            while cur:
                st.append(cur)
                cur = cur.left
            
            node = st.pop()

            k = k - 1
            if k == 0:
                return node.val
            
            cur = node.right