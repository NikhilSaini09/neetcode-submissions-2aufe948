class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
        if(!matrix || matrix.length === 0 || matrix[0].length === 0) return 0;

        const m: number = matrix.length;
        const n: number = matrix[0].length;
        const dirs: number[][] = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        const memo: Int32Array<ArrayBuffer>[] = Array.from({ length: m }, () => new Int32Array(n));

        const dfs = (r: number, c: number): number => {
            if(memo[r][c] !== 0) return memo[r][c];

            let maxLen: number = 1;
            for(const [dr, dc] of dirs) {
                const nr: number = r + dr;
                const nc: number = c + dc;

                if(nr >= 0 && nc >= 0 && nr < m && nc < n && matrix[nr][nc] < matrix[r][c]) {
                    maxLen = Math.max(maxLen, 1 + dfs(nr, nc));
                }
            }

            return memo[r][c] = maxLen;
        };

        let ans: number = 0;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                ans = Math.max(ans, dfs(i, j));
            }
        }
        return ans;
    }
}
