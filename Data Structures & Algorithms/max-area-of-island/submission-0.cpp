class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        if(grid.empty()) return 0;
        int m = grid.size(), n = grid[0].size();

        int ans = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(grid[i][j] == 1) {
                    int size = 0;
                    dfs(grid, i, j, m, n, size);
                    ans = max(ans, size);
                }
            }
        }

        return ans;
    }
private:
    void dfs(vector<vector<int>>& grid, int r, int c, int m, int n, int &size) {
        if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return;

        grid[r][c] = 0;
        ++size;

        dfs(grid, r - 1, c, m, n, size);
        dfs(grid, r, c - 1, m, n, size);
        dfs(grid, r + 1, c, m, n, size);
        dfs(grid, r, c + 1, m, n, size);
    }
};
