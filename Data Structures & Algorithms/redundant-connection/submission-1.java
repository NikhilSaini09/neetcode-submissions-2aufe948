class Solution {
    private int[] p;

    private int find(int u) {
        if(p[u] == u) return u;
        return p[u] = find(p[u]);
    }

    private boolean connect(int u, int v) {
        u = find(u);
        v = find(v);
        if(u == v) return false;
        p[v] = u;
        return true;
    }

    public int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        p = new int[n];
        for(int i = 0; i < n; ++i) p[i] = i;

        for(int[] e : edges) {
            if(!connect(e[0] - 1, e[1] - 1)) return new int[]{e[0], e[1]};
        }

        return new int[]{-1, -1};
    }
}
