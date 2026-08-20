from functools import cache

class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        m, n = len(matrix), len(matrix[0])

        @cache
        def dfs(r: int, c: int) -> int:
            val = matrix[r][c]
            return 1 + max(
                (
                    dfs(nr, nc)
                    for nr, nc in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1))
                    if 0 <= nr < m and 0 <= nc < n and matrix[nr][nc] < val
                ),
                default=0,
            )

        return max(dfs(r, c) for r in range(m) for c in range(n))