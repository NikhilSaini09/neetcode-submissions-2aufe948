class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const INF: number = 1e7;

        const adj: number[][][] = Array.from({ length: n + 1 }, () => []);
        for(const [u, v, w] of times) {
            adj[u].push([v, w]);
        }

        const dist: number[] = new Array(n + 1).fill(INF);
        const pq: InstanceType<typeof MinPriorityQueue> = new MinPriorityQueue((a: number[]) => a[0]);
        // const pq = new PriorityQueue((a, b) => a[0] - b[0]);
        dist[k] = 0;
        pq.enqueue([0, k]);

        while(!pq.isEmpty()) {
            const [t, u] = pq.dequeue();

            if(t > dist[u]) continue;

            for(const [v, d] of adj[u]) {
                if(dist[v] > t + d) {
                    dist[v] = t + d;
                    pq.enqueue([dist[v], v]);
                }
            }
        }
        
        dist[0] = 0;
        const maxv: number = Math.max(...dist);
        return maxv === INF ? -1 : maxv;
    }
}
