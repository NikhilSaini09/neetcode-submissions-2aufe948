class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        n, m = len(matrix), len(matrix[0])
        lvl = (min(n, m) + 1) // 2

        ans = []
        for i in range(lvl):
            for j in range(i, m - i):
                ans.append(matrix[i][j])
            for j in range(i + 1, n - i):
                ans.append(matrix[j][m - i - 1])
            if n >= 2 * i + 2:
                for j in range(m - i - 2, i - 1, -1):
                    ans.append(matrix[n - i - 1][j])
            if m >= 2 * i + 2:
                for j in range(n - i - 2, i, -1):
                    ans.append(matrix[j][i])
        return ans