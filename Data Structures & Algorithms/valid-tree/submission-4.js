class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length != n - 1) return false;

        const adj = Array.from({ length: n }, () => []);
        for(const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const vis = new Array(n).fill(false);
        vis[0] = true;

        const dfs = (u) => {
            for(const v of adj[u]) {
                if(!vis[v]) {
                    vis[v] = true;
                    dfs(v);
                }
            }
        }

        dfs(0);

        // for(const b of vis) if(!b) return b;
        // return true;
        // return vis.every(Boolean);
        return !vis.includes(false);
    }
}
