class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = {i: [] for i in range(1, n + 1)}
        for u, v, w in times:
            adj[u].append((v, w))
        
        dist = {}
        pq = [(0, k)]

        while pq:
            t, u = heapq.heappop(pq)
            if u not in dist:
                dist[u] = t
                for v, d in adj[u]:
                    if v not in dist:
                        heapq.heappush(pq, (t + d, v))

        return max(dist.values()) if len(dist) == n else -1


        # adj = [[] for _ in range(n)]
        # for u, v, w in times:
        #     adj[u - 1].append((v - 1, w))
        
        # dist = [float('inf')] * n
        # dist[k - 1] = 0
        # pq = [(0, k - 1)]

        # while pq:
        #     t, u = heapq.heappop(pq)

        #     if t > dist[u]:
        #         continue
            
        #     for v, d in adj[u]:
        #         if dist[v] > t + d:
        #             dist[v] = t + d
        #             heapq.heappush(pq, (dist[v], v))
            
        # ans = 0
        # for i in range(n):
        #     if dist[i] == float('inf'):
        #         return -1
        #     ans = max(ans, dist[i])
        # return ans