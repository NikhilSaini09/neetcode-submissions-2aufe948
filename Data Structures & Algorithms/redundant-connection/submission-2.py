class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        p = [i for i in range(len(edges))]

        def find(u: int) -> int:
            if u != p[u]:
                p[u] = find(p[u])
            return p[u]
        
        def connect(u: int, v: int) -> bool:
            u, v = find(u), find(v)
            if u == v:
                return False
            p[v] = u
            return True
        
        for u, v in edges:
            if not connect(u - 1, v - 1):
                return [u, v]
        return [-1, -1]