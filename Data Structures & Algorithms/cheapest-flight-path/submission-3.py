class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        dist = [float('inf')] * n
        dist[src] = 0

        for _ in range(k + 1):
            temp = dist[:]

            for u, v, p in flights:
                # if(dist[u])
                temp[v] = min(temp[v], dist[u] + p)
            
            dist = temp
        
        return dist[dst] if dist[dst] != float('inf') else -1