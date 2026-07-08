class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const m: number = board.length;
        const n: number = board[0].length;

        const dfs = (r: number, c: number): void => {
            if(r >= 0 && r < m && c >= 0 && c < n && board[r][c] === 'O') {
                board[r][c] = '#';

                dfs(r + 1, c);
                dfs(r - 1, c);
                dfs(r, c + 1);
                dfs(r, c - 1);
            }
        }

        for(let i = 0; i < m; ++i) {
            dfs(i, 0);
            dfs(i, n - 1);
        }
        for(let j = 0; j < n; ++j) {
            dfs(0, j);
            dfs(m - 1, j);
        }

        for(let i = 0; i < m; ++i) {
            for(let j = 0; j < n; ++j) {
                if(board[i][j] === 'O') board[i][j] = 'X';
                else if(board[i][j] === '#') board[i][j] = 'O';
            }
        }
    }
}
