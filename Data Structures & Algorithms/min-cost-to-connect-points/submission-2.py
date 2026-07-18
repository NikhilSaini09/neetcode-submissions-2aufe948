class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        if n < 2:
            return 0
        
        dist = [float('inf')] * n
        vis = [False] * n
        dist[0] = 0

        sum, cur = 0, 0
        for _ in range(n - 1):
            vis[cur] = True
            nnode, medge = -1, float('inf')

            x1, y1 = points[cur]
            for i in range(n):
                if vis[i]:
                    continue
                
                d = abs(x1 - points[i][0]) + abs(y1 - points[i][1])
                if d < dist[i]:
                    dist[i] = d
                
                if dist[i] < medge:
                    medge = dist[i]
                    nnode = i
            
            sum += medge
            cur = nnode
        
        return sum