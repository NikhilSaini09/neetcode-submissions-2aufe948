class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adj: number[][] = Array.from({ length: n }, () => []);
        for(const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const vis: boolean[] = new Array(n).fill(false);

        const dfs = (u: number): void => {
            vis[u] = true;
            for(const v of adj[u]) {
                if(!vis[v]) dfs(v);
            }
        }

        let ans: number = 0;
        for(let i = 0; i < n; ++i) {
            if(!vis[i]) {
                ans++;
                dfs(i);
            }
        }
        return ans;
    }
}
