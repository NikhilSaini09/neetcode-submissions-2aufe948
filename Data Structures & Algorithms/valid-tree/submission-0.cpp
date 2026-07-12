class Solution {
    void dfs(vector<vector<int>> &adj, vector<bool> &vis, int u) {
        for(int v : adj[u]) {
            if(!vis[v]) {
                vis[v] = true;
                dfs(adj, vis, v);
            }
        }
    }
public:
    bool validTree(int n, vector<vector<int>>& edges) {
        if(edges.size() != n - 1) return false;
        vector<vector<int>> adj(n);
        for(const auto &e : edges) {
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }

        vector<bool> vis(n, false);
        vis[0] = true;
        dfs(adj, vis, 0);

        for(int i = 0; i < n; ++i) if(!vis[i]) return false;
        return true;
    }
};
