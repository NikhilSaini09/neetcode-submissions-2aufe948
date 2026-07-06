class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        let fresh = 0;
        const q = [];
        for(let i = 0; i < m; ++i) {
            for(let j = 0; j < n; ++j) {
                if(grid[i][j] === 2) q.push({ r: i, c: j });
                else if(grid[i][j] === 1) ++fresh;
            }
        }

        if(fresh === 0) return 0;

        let ans = -1;
        let head = 0;
        while(head < q.length) {
            ++ans;
            const qz = q.length - head;

            for(let i = 0; i < qz; ++i) {
                const { r, c } = q[head++];

                for(const [dr, dc] of dirs) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if(nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        q.push({ r: nr, c: nc });
                        fresh--;
                    }
                }
            }
        }

        return fresh === 0 ? ans : -1;
    }
}
