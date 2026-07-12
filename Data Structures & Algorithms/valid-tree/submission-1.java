class Solution {
    public boolean validTree(int n, int[][] edges) {
        if(edges.length != n - 1) return false;

        List<List<Integer>> adj = new ArrayList<>();
        for(int i = 0; i < n; ++i) {
            adj.add(new ArrayList<>());
        }
        for(int[] e : edges) {
            adj.get(e[0]).add(e[1]);
            adj.get(e[1]).add(e[0]);
        }

        boolean[] vis = new boolean[n];
        vis[0] = true;
        dfs(adj, vis, 0);

        for(int i = 0; i < n; ++i) if(!vis[i]) return false;
        return true; 
    }

    private void dfs(List<List<Integer>> adj, boolean[] vis, int u) {
        for(int v : adj.get(u)) {
            if(!vis[v]) {
                vis[v] = true;
                dfs(adj, vis, v);
            }
        }
    }
}
