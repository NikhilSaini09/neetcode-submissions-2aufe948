class Solution {
    public int numIslands(char[][] grid) {
        int m = grid.length, n = grid[0].length;

        int ans = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(grid[i][j] == '1') {
                    dfs(grid, i, j, m, n);
                    ++ans;
                }
            }
        }
        return ans;
    }
    private void dfs(char[][] grid, int r, int c, int m, int n) {
        if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;

        grid[r][c] = '0';

        dfs(grid, r - 1, c, m, n);
        dfs(grid, r + 1, c, m, n);
        dfs(grid, r, c - 1, m, n);
        dfs(grid, r, c + 1, m, n);
    }
}
