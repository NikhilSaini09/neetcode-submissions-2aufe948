class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix) {
        if(!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

        const m = matrix.length;
        const n = matrix[0].length;
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        const memo = Array.from({ length: m }, () => new Int32Array(n));

        const dfs = (r, c) => {
            if(memo[r][c] !== 0) return memo[r][c];

            let maxLen = 1;
            for(const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if(nr >= 0 && nc >= 0 && nr < m && nc < n && matrix[nr][nc] < matrix[r][c]) {
                    maxLen = Math.max(maxLen, 1 + dfs(nr, nc));
                }
            }

            return memo[r][c] = maxLen;
        };

        let ans = 0;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                ans = Math.max(ans, dfs(i, j));
            }
        }
        return ans;
    }
}
