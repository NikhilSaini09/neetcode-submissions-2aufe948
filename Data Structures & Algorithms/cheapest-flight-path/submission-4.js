class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let dist = new Array(n).fill(Infinity);
        dist[src] = 0;

        for(let i = 0; i <= k; ++i) {
            const temp = [...dist];

            for(const [u, v, p] of flights) {
                temp[v] = Math.min(temp[v], dist[u] + p);
            }

            dist = temp;
        }

        return dist[dst] == Infinity ? -1 : dist[dst];
    }
}
