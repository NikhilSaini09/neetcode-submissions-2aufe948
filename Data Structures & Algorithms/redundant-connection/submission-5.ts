class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n: number = edges.length;
        const p: number[] = Array.from({ length: n + 1 }, (_, i) => i);

        const find = (u: number): number => {
            if(p[u] == u) return u;
            return p[u] = find(p[u]);
        }

        const connect = (u: number, v: number): boolean => {
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
