class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const pq = new MinPriorityQueue(a => a[0]);
        pq.enqueue([grid[0][0], 0, 0]);
        grid[0][0] = -1;

        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        let ans = 0;
        while(!pq.isEmpty()) {
            const [time, r, c] = pq.dequeue();

            ans = Math.max(ans, time);
            if(r == n - 1 && c == n - 1) return ans;

            for(const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if(nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] != -1) {
                    pq.enqueue([grid[nr][nc], nr, nc]);
                    grid[nr][nc] = -1;
                }
            }
        }
        return -1;
    }
}
