class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const m = grid.length;
        const n = grid[0].length;
        let size = 0;

        function dfs(r, c) {
            if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == 0) return;

            grid[r][c] = 0;
            size++;

            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
        }

        let ans = 0;
        for(let i = 0; i < m; ++i) {
            for(let j = 0; j < n; ++j) {
                if(grid[i][j] == 1) {
                    size = 0;
                    dfs(i, j);
                    ans = Math.max(ans, size);
                }
            }
        }
        return ans;
    }
}
