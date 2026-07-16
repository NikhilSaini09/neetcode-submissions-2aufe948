class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = [[] for _ in range(n)]
        for u, v, w in times:
            adj[u - 1].append((v - 1, w))
        
        dist = [float('inf')] * n
        dist[k - 1] = 0
        pq = [(0, k - 1)]

        while pq:
            t, u = heapq.heappop(pq)

            if t > dist[u]:
                continue
            
            for v, d in adj[u]:
                if dist[v] > t + d:
                    dist[v] = t + d
                    heapq.heappush(pq, (dist[v], v))
            
        ans = 0
        for i in range(n):
            if dist[i] == float('inf'):
                return -1
            ans = max(ans, dist[i])
        return ans