class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Int32Array(9);
        const col = new Int32Array(9);
        const grid = new Int32Array(9);

        for(let r = 0; r < 9; ++r) {
            for(let c = 0; c < 9; ++c) {
                const char = board[r][c];
                if(char != '.') {
                    const val = char.charCodeAt(0) - 49;
                    const mask = 1 << val;
                    // const gIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                    const gIdx = (r / 3 | 0) * 3 + (c / 3 | 0);

                    if((row[r] & mask) || (col[c] & mask) || (grid[gIdx] & mask)) return false;
                    row[r] |= mask;
                    col[c] |= mask;
                    grid[gIdx] |= mask;
                }
            }
        }

        return true;
    }
}
