class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> ans = new ArrayList<>();
        
        char[][] temp = new char[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(temp[i], '.');
        }

        boolean[] row = new boolean[n];
        boolean[] upperTri = new boolean[2 * n - 1];
        boolean[] lowerTri = new boolean[2 * n - 1];

        putNQueens(ans, 0, n, temp, row, upperTri, lowerTri);
        return ans;
    }

    private void putNQueens(List<List<String>> sol, int col, int n, char[][] poss, 
                            boolean[] row, boolean[] uT, boolean[] lT) {
        if (col == n) {
            sol.add(constructBoard(poss));
            return;
        }

        for (int i = 0; i < n; i++) {
            if (!row[i] && !uT[n - 1 + col - i] && !lT[col + i]) {
                
                row[i] = true;
                uT[n - 1 + col - i] = true;
                lT[col + i] = true;
                poss[i][col] = 'Q';

                putNQueens(sol, col + 1, n, poss, row, uT, lT);

                row[i] = false;
                uT[n - 1 + col - i] = false;
                lT[col + i] = false;
                poss[i][col] = '.';
            }
        }
    }

    private List<String> constructBoard(char[][] board) {
        List<String> res = new ArrayList<>();
        for (int i = 0; i < board.length; i++) {
            res.add(new String(board[i]));
        }
        return res;
    }
}
