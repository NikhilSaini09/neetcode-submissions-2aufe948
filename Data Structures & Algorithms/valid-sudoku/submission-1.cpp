// class Solution {
// public:
//     bool isValidSudoku(vector<vector<char>>& board) {
//         vector<vector<bool>> row(9, vector<bool> (10, false));
//         vector<vector<bool>> col(9, vector<bool> (10, false));
//         vector<vector<bool>> grid(9, vector<bool> (10, false));

//         for(int i = 0; i < 9; ++i) {
//             for(int j = 0; j < 9; ++j) {
//                 if(board[i][j] != '.') {
//                     int num = board[i][j] - '0';
                    
//                     if(row[i][num]) return false;
//                     row[i][num] = true;

//                     if(col[j][num]) return false;
//                     col[j][num] = true;

//                     int idx = 3*(i/3) + j/3;
//                     if(grid[idx][num]) return false;
//                     grid[idx][num] = true;
//                 }
//             }
//         }

//         return true;
//     }
// };


class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        int row[9] = {0};
        int col[9] = {0};
        int grid[9] = {0};

        for(int r = 0; r < 9; ++r) {
            for(int c = 0; c < 9; ++c){
                if(board[r][c] != '.') {
                    int val = board[r][c] - '1';
                    if((row[r] & (1 << val)) || (col[c] & (1 << val)) ||
                        (grid[(r / 3) * 3 + (c / 3)] & (1 << val))) return false;
                    
                    row[r] |= (1 << val);
                    col[c] |= (1 << val);
                    grid[(r / 3) * 3 + (c / 3)] |= (1 << val);
                } 
            }
        }

        return true;
    }
};