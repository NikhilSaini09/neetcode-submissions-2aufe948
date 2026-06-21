class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<string> temp(n, string(n, '.'));
        vector<bool> row(n, true);
        vector<bool> upperTri(2*n - 1, true);
        vector<bool> lowerTri(2*n - 1, true);
        putNQueens(ans, 0, n, temp, row, upperTri, lowerTri);
        return ans;
    }
private:
    void putNQueens(vector<vector<string>> &sol, int col, int n, vector<string> &poss, vector<bool> &row, vector<bool> &uT, vector<bool> &lT) {
        if(col == n) {
            sol.push_back(poss);
            return;
        }

        for(int i=0; i<n; ++i) {
            if(row[i] && uT[n - 1 + col - i] && lT[col + i]) {
                row[i] = false;
                uT[n - 1 + col - i] = false;
                lT[col + i] = false;
                poss[i][col] = 'Q';
                putNQueens(sol, col + 1, n, poss, row, uT, lT);
                row[i] = true;
                uT[n - 1 + col - i] = true;
                lT[col + i] = true;
                poss[i][col] = '.';
            }
        }
    }
};
