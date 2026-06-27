class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const m: number = grid.length;
        const n: number = grid[0].length;

        const dfs = (r: number, c: number): void => {
            if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] == '0') return;

            grid[r][c] = '0';

            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
        }

        let ans: number = 0;
        for(let i = 0; i < m; ++i) {
            for(let j = 0; j < n; ++j) {
                if(grid[i][j] == '1') {
                    dfs(i, j);
                    ans++;
                }
            }
        }
        return ans;
    }
}
