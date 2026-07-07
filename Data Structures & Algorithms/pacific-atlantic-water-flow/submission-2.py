class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        if not heights or not heights[0]:
            return []
            
        m, n = len(heights), len(heights[0])
        
        pacific = set()
        atlantic = set()
        
        dirs = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        def dfs(r: int, c: int, ocean_set: set):
            ocean_set.add((r, c))
            
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                
                if (0 <= nr < m and 0 <= nc < n and 
                    (nr, nc) not in ocean_set and 
                    heights[nr][nc] >= heights[r][c]):
                    dfs(nr, nc, ocean_set)

        for i in range(m):
            if (i, 0) not in pacific:
                dfs(i, 0, pacific)
            if (i, n - 1) not in atlantic:
                dfs(i, n - 1, atlantic)

        for j in range(n):
            if (0, j) not in pacific:
                dfs(0, j, pacific)
            if (m - 1, j) not in atlantic:
                dfs(m - 1, j, atlantic)

        return [list(cell) for cell in (pacific & atlantic)]