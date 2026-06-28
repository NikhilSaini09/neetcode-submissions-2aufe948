class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        size = 0
        def dfs(r: int, c: int):
            nonlocal size
            
            if r < 0 or r >= m or c < 0 or c >= n or grid[r][c] == 0:
                return
            
            grid[r][c] = 0
            size += 1

            dfs(r - 1, c)
            dfs(r + 1, c)
            dfs(r, c - 1)
            dfs(r, c + 1)

        ans = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    size = 0
                    dfs(i, j)
                    ans = max(ans, size)
        return ans