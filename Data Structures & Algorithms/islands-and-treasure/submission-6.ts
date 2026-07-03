class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const m: number = grid.length;
        const n: number = grid[0].length;
        const dirs: number[][] = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const q: {r: number, c: number}[] = [];
        for(let i = 0; i < m; ++i) {
            for(let j = 0; j < n; ++j) {
                if(grid[i][j] === 0) {
                    q.push({ r: i, c: j });
                }
            }
        }

        let head: number = 0;
        while(head < q.length) {
            const { r, c } = q[head++];

            for(const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if(nr >= 0 && nc >= 0 && nr < m && nc < n && 
                    grid[nr][nc] !== -1 && grid[nr][nc] > grid[r][c] + 1) {
                    grid[nr][nc] = grid[r][c] + 1;
                    q.push({ r: nr, c: nc });
                }
            }
        }
    }
}
