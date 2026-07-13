class Solution {
    public int countComponents(int n, int[][] edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for(int i = 0; i < n; ++i) {
            adj.add(new ArrayList<>());
        }

        for(int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }

        boolean[] vis = new boolean[n];

        int ans = 0;
        for(int i = 0; i < n; ++i) {
            if(!vis[i]) {
                ans++;
                dfs(adj, vis, i);
            }
        }
        return ans;
    }

    private void dfs(List<List<Integer>> adj, boolean[] vis, int u) {
        vis[u] = true;
        for(int v : adj.get(u)) {
            if(!vis[v]) dfs(adj, vis, v);
        }
    }
}
