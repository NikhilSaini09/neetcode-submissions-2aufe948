class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const m = board.length;
        const n = board[0].length;

        const dfs = (r, c, idx) => {
            if(idx === word.length) return true;
            if(r < 0 || c < 0 || r >= m || c >= n) return false;
            if(board[r][c] !== word[idx]) return false;

            const temp = board[r][c];
            board[r][c] = '#';

            const found = dfs(r + 1, c, idx + 1) ||
                        dfs(r - 1, c, idx + 1) ||
                        dfs(r, c + 1, idx + 1) ||
                        dfs(r, c - 1, idx + 1);

            board[r][c] = temp;
            
            return found;
        };

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(dfs(i, j, 0)) return true;
            }
        }

        return false;
    }
}
