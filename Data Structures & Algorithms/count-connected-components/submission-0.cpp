class Solution {
    void dfs(vector<vector<int>> &adj, vector<bool> &vis, int u) {
        vis[u] = true;
        for(int v : adj[u]) {
            if(!vis[v]) dfs(adj, vis, v);
        }
    }
public:
    int countComponents(int n, vector<vector<int>>& edges) {
        vector<vector<int>> adj(n);
        for(const auto &e : edges) {
            adj[e[0]].push_back(e[1]);
            adj[e[1]].push_back(e[0]);
        }

        vector<bool> vis(n, false);
        
        int ans = 0;
        for(int i = 0; i < n; ++i) {
            if(!vis[i]) {
                ans++;
                dfs(adj, vis, i);
            }
        }
        return ans;
    }
};
