class Solution {
    int m, n;
    vector<pair<int, int>> dirs = {{1,0}, {-1,0}, {0,1}, {0,-1}};

    void dfs(vector<vector<int>>& ht, vector<vector<bool>>& vis, int r, int c) {
        vis[r][c] = true;
        
        for(auto &[dr, dc] : dirs) {
            int nr = r + dr, nc = c + dc;
            
            if(nr >= 0 && nc >= 0 && nr < m && nc < n && !vis[nr][nc] && ht[nr][nc] >= ht[r][c]) {
                dfs(ht, vis, nr, nc);
            }
        }
    }
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        m = heights.size(), n = heights[0].size();

        vector<vector<bool>> pacific(m, vector<bool> (n, false));
        vector<vector<bool>> atlantic(m, vector<bool> (n, false));

        for(int i = 0; i < m; ++i) dfs(heights, pacific, i, 0), dfs(heights, atlantic, i, n - 1);
        for(int j = 0; j < n; ++j) dfs(heights, pacific, 0, j), dfs(heights, atlantic, m - 1, j);

        vector<vector<int>> result;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(pacific[i][j] && atlantic[i][j]) result.push_back({i, j});
            }
        }
        return result;
    }
};
