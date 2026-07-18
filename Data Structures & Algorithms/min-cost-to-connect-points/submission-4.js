class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        if(n < 2) return 0;

        const dist = new Array(n).fill(1e8);
        const vis = new Array(n).fill(false);
        dist[0] = 0;

        let sum = 0;
        let cur = 0;
        for(let i = 0; i < n - 1; ++i) {
            vis[cur] = true;
            let nnode = -1;
            let medge = Infinity;

            const [x1, y1] = points[cur];
            for(let j = 0; j < n; ++j) {
                if(vis[j]) continue;

                const d = Math.abs(x1 - points[j][0]) + Math.abs(y1 - points[j][1]);
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
