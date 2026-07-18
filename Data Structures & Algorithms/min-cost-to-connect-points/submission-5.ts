class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        const n: number = points.length;
        if(n < 2) return 0;

        const dist: number[] = new Array(n).fill(1e8);
        const vis: boolean[] = new Array(n).fill(false);
        dist[0] = 0;

        let sum: number = 0;
        let cur: number = 0;
        for(let i = 0; i < n - 1; ++i) {
            vis[cur] = true;
            let nnode: number = -1;
            let medge: number = Infinity;

            const [x1, y1] = points[cur] as [number, number];
            for(let j = 0; j < n; ++j) {
                if(vis[j]) continue;

                const d: number = Math.abs(x1 - points[j][0]) + Math.abs(y1 - points[j][1]);
                if(d < dist[j]) dist[j] = d;
                if(dist[j] < medge) {
                    medge = dist[j];
                    nnode = j;
                }
            }

            sum += medge;
            cur = nnode;
        }

        return sum;
    }
}
