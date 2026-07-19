class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const n: number = grid.length;
        const pq: InstanceType<typeof MinPriorityQueue> = new MinPriorityQueue((a: number[]) => a[0]);
        pq.enqueue([grid[0][0], 0, 0]);
        grid[0][0] = -1;

        const dirs: number[][] = [[-1, 0], [0, -1], [1, 0], [0, 1]];
        let ans: number = 0;
        while(!pq.isEmpty()) {
            const [time, r, c] = pq.dequeue() as [number, number, number];

            ans = Math.max(ans, time);
            if(r == n - 1 && c == n - 1) return ans;

            for(const [dr, dc] of dirs) {
                const nr: number = r + dr;
                const nc: number = c + dc;

                if(nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] != -1) {
                    pq.enqueue([grid[nr][nc], nr, nc]);
                    grid[nr][nc] = -1;
                }
            }
        }
        return -1;
    }
}
