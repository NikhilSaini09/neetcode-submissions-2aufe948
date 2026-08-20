#include <cstring>

class Solution {
    int memo[201][201];
    int dirs[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

    int dfs(vector<vector<int>>& matrix, int r, int c, int m, int n) {
        if(memo[r][c] != 0) return memo[r][c];

        int maxLen = 1;
        for(auto &d : dirs) {
            int nr = r + d[0], nc = c + d[1];
            if(nr >= 0 && nc >= 0 && nr < m && nc < n && matrix[nr][nc] < matrix[r][c]) {
                maxLen = max(maxLen, 1 + dfs(matrix, nr, nc, m, n));
            }
        }
        return memo[r][c] = maxLen;
    }
public:
    int longestIncreasingPath(vector<vector<int>>& matrix) {
        if(matrix.empty() || matrix[0].empty()) return 0;
        int m = matrix.size(), n = matrix[0].size();
        memset(memo, 0, sizeof(memo));

        int ans = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                ans = max(ans, dfs(matrix, i, j, m, n));
            }
        }
        return ans;
    }
};



// class Solution {
// public:
//     int longestIncreasingPath(vector<vector<int>>& matrix) {
//         int maxi = 0, m = matrix.size(), n = matrix[0].size();
//         queue<pair<int, int>> q;

//         for(int i = 0; i < m; ++i) {
//             for(int j = 0; j < n; ++j) {
//                 if(matrix[i][j] == maxi) q.emplace(i, j);
//                 else if(matrix[i][j] > maxi) {
//                     maxi = matrix[i][j];
//                     q = queue<pair<int, int>> ();
//                     q.emplace(i, j);
//                 }
//             }
//         }

//         int dirs[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

//         int ans = 0;
//         while(!q.empty()) {
//             int sz = q.size();

//             while(sz--) {
//                 auto [r, c] = q.front();
//                 q.pop();

//                 for(auto &d : dirs) {
//                     int nr = r + d[0], nc = c + d[1];
//                     if(nr >= 0 && nc >= 0 && nr < m && nc < n && matrix[nr][nc] < matrix[r][c]) {
//                         q.emplace(nr, nc);
//                     }
//                 }
//             }

//             ++ans;
//         }

//         return ans;
//     }
// };
