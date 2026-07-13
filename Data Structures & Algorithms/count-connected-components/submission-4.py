class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        adj = [[] for _ in range(n)]
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        seen = set()
        def dfs(i):
            if i in seen: 
                return 0
            seen.add(i)
            for j in adj[i]: 
                dfs(j)
            return 1

        return sum(dfs(i) for i in range(n))
        
        
        # adj = [[] for _ in range(n)]
        # vis = [False] * n

        # for u, v in edges:
        #     adj[u].append(v)
        #     adj[v].append(u)
        
        # def dfs(u: int):
        #     vis[u] = True
        #     for v in adj[u]:
        #         if not vis[v]:
        #             dfs(v)
        
        # ans = 0
        # for i in range(n):
        #     if not vis[i]:
        #         ans += 1
        #         dfs(i)
        
        # return ans