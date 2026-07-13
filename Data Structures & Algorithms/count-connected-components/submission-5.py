class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        parent = list(range(n))
        
        def find(i):
            if parent[i] != i: 
                parent[i] = find(parent[i])
            return parent[i]
        
        for u, v in edges:
            root_u, root_v = find(u), find(v)
            if root_u != root_v:
                parent[root_u] = root_v
                n -= 1
                
        return n

        
        
        # adj = [[] for _ in range(n)]
        # for u, v in edges:
        #     adj[u].append(v)
        #     adj[v].append(u)

        # seen = set()
        # def dfs(i):
        #     if i in seen: 
        #         return 0
        #     seen.add(i)
        #     for j in adj[i]: 
        #         dfs(j)
        #     return 1

        # return sum(dfs(i) for i in range(n))
        



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