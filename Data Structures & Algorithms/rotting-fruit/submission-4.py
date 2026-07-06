class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]

        fresh = 0
        queue = collections.deque()
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    grid[i][j] = 0
                    queue.append((i, j))
                elif grid[i][j] == 1:
                    fresh += 1
        
        if fresh == 0:
            return 0
        
        ans = -1
        while queue:
            ans += 1

            qz = len(queue)
            for _ in range(qz):
                r, c = queue.popleft()

                for dr, dc in dirs:
                    nr, nc = r + dr, c + dc

                    if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] != 0:
                        grid[nr][nc] = 0
                        queue.append((nr, nc))
                        fresh -= 1
        
        return ans if fresh == 0 else -1