class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        n = len(grid)

        pq = [(grid[0][0], 0, 0)]
        grid[0][0] = -1

        dirs = ((-1, 0), (0, -1), (1, 0), (0, 1))
        ans = 0
        while pq:
            time, r, c = heapq.heappop(pq)

            ans = max(ans, time);
            if r == n - 1 and c == n - 1:
                return ans
            
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc

                if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] != -1:
                    heapq.heappush(pq, (grid[nr][nc], nr, nc));
                    grid[nr][nc] = -1
        
        return -1