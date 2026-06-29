"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node:
            return None
        
        queue = collections.deque([node])
        clones = {node: Node(node.val)}

        while queue:
            cur = queue.popleft()

            for nei in cur.neighbors:
                if nei not in clones:
                    clones[nei] = Node(nei.val)
                    queue.append(nei)
                clones[cur].neighbors.append(clones[nei])
        
        return clones[node]