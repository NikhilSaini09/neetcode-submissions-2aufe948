class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const m: number = heights.length;
        const n: number = heights[0].length;
        const dirs: number[][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        const createGrid = () => Array.from({ length: m }, () => new Array(n).fill(false));
        const pacific: boolean[][] = createGrid();
        const atlantic: boolean[][] = createGrid();

        const dfs = (r: number, c: number, vis: boolean[][]): void => {
            vis[r][c] = true;

            for(const [dr, dc] of dirs) {
                const nr: number = r + dr;
                const nc: number = c + dc;

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

        const result: number[][] = [];
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
