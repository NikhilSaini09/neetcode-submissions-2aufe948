class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        const p = Array.from({ length: n + 1 }, (_, i) => i);

        const find = (u) => {
            if(p[u] == u) return u;
            return p[u] = find(p[u]);
        }

        const connect = (u, v) => {
            u = find(u), v = find(v);
            if(u == v) return false;
            p[v] = u;
            return true;
        }

        for(const [u, v] of edges) {
            if(!connect(u, v)) return [u, v];
        }

        return [-1, -1];
    }
}
