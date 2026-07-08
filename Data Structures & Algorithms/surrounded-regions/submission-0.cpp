class Solution {
public:
    void solve(vector<vector<char>>& board) {
        if(board.empty()) return;
        int m = board.size(), n = board[0].size();
        queue<pair<int, int>> q;
        for(int i=0; i<m; ++i) {
            if(board[i][0] == 'O') q.emplace(i, 0), board[i][0] = '#';
            if(board[i][n-1] == 'O') q.emplace(i, n-1), board[i][n-1] = '#';
        }
        for(int j=1; j<n-1; ++j) {
            if(board[0][j] == 'O') q.emplace(0, j), board[0][j] = '#';
            if(board[m-1][j] == 'O') q.emplace(m-1, j), board[m-1][j] = '#';
        }

        vector<pair<int, int>> dirs = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};

        while(!q.empty()) {
            pair<int, int>& it = q.front();
            int r = it.first;
            int c = it.second;
            q.pop();

            for(pair<int, int>& d : dirs) {
                int nr = r + d.first;
                int nc = c + d.second;

                if(nr>=0 && nr<m && nc>=0 && nc<n && board[nr][nc] == 'O') {
                    board[nr][nc] = '#';
                    q.emplace(nr, nc);
                }
            }
        }

        for(int i=0; i<m; ++i) {
            for(int j=0; j<n; ++j) {
                if(board[i][j] == 'O') board[i][j] = 'X';
                else if(board[i][j] == '#') board[i][j] = 'O';
            }
        }
    }
};
