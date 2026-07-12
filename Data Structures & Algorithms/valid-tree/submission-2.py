class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1:
            return False
        
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        
        vis = [False] * n
        vis[0] = True

        def dfs(u: int):
            for v in adj[u]:
                if not vis[v]:
                    vis[v] = True
                    dfs(v)
        
        dfs(0)

        return all(vis)