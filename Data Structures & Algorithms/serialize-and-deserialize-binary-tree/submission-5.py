# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Codec:
    
    # Encodes a tree to a single string.
    def serialize(self, root: Optional[TreeNode]) -> str:
        if not root:
            return ""
        
        res = []
        q = deque([root])

        while q:
            node = q.popleft()
            if node:
                res.append(str(node.val))
                q.append(node.left)
                q.append(node.right)
            else:
                res.append("#")
        
        return ",".join(res)
        
    # Decodes your encoded data to tree.
    def deserialize(self, data: str) -> Optional[TreeNode]:
        if not data:
            return None
        
        values = data.split(",")
        root = TreeNode(int(values[0]))
        q = deque([root])
        idx = 1

        while q:
            node = q.popleft()

            if values[idx] != "#":
                node.left = TreeNode(int(values[idx]))
                q.append(node.left)
            idx += 1

            if values[idx] != "#":
                node.right = TreeNode(int(values[idx]))
                q.append(node.right)
            idx += 1
        
        return root