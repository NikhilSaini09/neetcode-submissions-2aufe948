class Solution {
public:
    void islandsAndTreasure(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        int dirs[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

        queue<pair<int, int>> q;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(grid[i][j] == 0) {
                    q.emplace(i, j);
                }
            }
        }

        while(!q.empty()) {
            auto [r, c] = q.front();
            q.pop();

            for(int i = 0; i < 4; ++i) {
                int nr = r + dirs[i][0];
                int nc = c + dirs[i][1];

                if(nr >= 0 and nc >= 0 and nr < m and nc < n and
                    grid[nr][nc] != -1 and grid[nr][nc] > grid[r][c] + 1) {
                    grid[nr][nc] = grid[r][c] + 1;
                    q.emplace(nr, nc);
                }
            }
        }
    }
};
