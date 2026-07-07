class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const m = heights.length;
        const n = heights[0].length;
        const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const createGrid = () => Array.from({ length: m }, () => new Array(n).fill(false));
        const pacific = createGrid();
        const atlantic = createGrid();

        const dfs = (r, c, vis) => {
            vis[r][c] = true;

            for(const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if(nr >= 0 && nc >= 0 && nr < m && nc < n && !vis[nr][nc]) {
                    if(heights[nr][nc] >= heights[r][c]) {
                        dfs(nr, nc, vis);
                    }
                }
            }
        };

        for(let i = 0; i < m; i++) {
            dfs(i, 0, pacific);
            dfs(i, n - 1, atlantic);
        }

        for(let j = 0; j < n; j++) {
            dfs(0, j, pacific);
            dfs(m - 1, j, atlantic);
        }

        const result = [];
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(pacific[i][j] && atlantic[i][j]) {
                    result.push([i, j]);
                }
            }
        }

        return result;
    }
}
