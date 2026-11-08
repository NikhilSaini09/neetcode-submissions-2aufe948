class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        const ans: number[][] = Array.from({ length: numRows }, (_, i) => new Array(i + 1).fill(1));
        for(let i = 2; i < numRows; ++i) {
            for(let j = 1; j < i; ++j) {
                ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
            }
        }
        return ans;
    }
}
