class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        const n = matrix.length;
        const m = matrix[0].length;
        const lvl = Math.trunc((Math.min(n, m) + 1) / 2);
        
        const ans: number[] = [];
        for(let i = 0; i < lvl; ++i) {
            for(let j = i; j < m - i; ++j) {
                ans.push(matrix[i][j]);
            }
            for(let j = i + 1; j < n - i; ++j) {
                ans.push(matrix[j][m - i - 1]);
            }
            if(n >= 2 * i + 2) {
                for(let j = m - i - 2; j >= i; --j) {
                    ans.push(matrix[n - i - 1][j]);
                }
            }
            if(m >= 2 * i + 2) {
                for(let j = n - i - 2; j > i; --j) {
                    ans.push(matrix[j][i]);
                }
            }
        }
        return ans;
    }
}
