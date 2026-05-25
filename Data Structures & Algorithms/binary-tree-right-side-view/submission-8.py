# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        rightView = []
        if not root:
            return rightView

        q = collections.deque([root])
        
        while q:
            qs = len(q)

            for i in range(qs):
                curr = q.popleft()
                if i == 0:
                    rightView.append(curr.val)
                if curr.right:
                    q.append(curr.right)
                if curr.left:
                    q.append(curr.left)
        
        return rightView