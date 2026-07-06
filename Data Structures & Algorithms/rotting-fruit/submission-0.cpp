class Solution {
public:
    int orangesRotting(vector<vector<int>>& grid) {
        int n = grid.size(), m = grid[0].size();
        vector<vector<bool>> isVisited(n, vector<bool> (m, false));
        queue<pair<int, int>> q;
        int fresh = 0;

        for(int i=0; i<n; ++i) {
            for(int j=0; j<m; ++j) {
                if(grid[i][j] == 2) {
                    isVisited[i][j] = true;
                    q.push({i, j});
                } else if(grid[i][j] == 1) fresh++;
                else isVisited[i][j] = true;
            }
        }

        if(!fresh) return 0;

        int ans = -1;
        int dirs[4][2] = {{1,0},{-1,0},{0,1},{0,-1}};

        while(!q.empty()) {
            ++ans;
            int x = q.size();
            while(x--) {
                int row = q.front().first;
                int col = q.front().second;
                q.pop();

                for(auto &d : dirs){
                    int r = row + d[0];
                    int c = col + d[1];
                    if(r>=0 && r<n && c>=0 && c<m && !isVisited[r][c]){
                        isVisited[r][c] = true;
                        q.push({r, c});
                        fresh--;
                    }
                }
            }
        }

        return (fresh == 0) ? ans : -1;
    }
};
