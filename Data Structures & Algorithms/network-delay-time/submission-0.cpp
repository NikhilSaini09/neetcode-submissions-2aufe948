class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        static constexpr int INF = 1e7;
        vector<vector<pair<int, int>>> adj(n);
        for(const auto &t : times) {
            adj[t[0] - 1].emplace_back(t[1] - 1, t[2]);
            // adj[t[1] - 1].emplace_back(t[0] - 1, t[2]);
        }

        vector<int> dist(n, INF);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq;
        dist[k - 1] = 0;
        pq.emplace(0, k - 1);

        while(!pq.empty()) {
            auto [t, u] = pq.top();
            pq.pop();

            if(t > dist[u]) continue;

            for(auto &[v, d] : adj[u]) {
                if(dist[v] > t + d) {
                    dist[v] = t + d;
                    pq.emplace(dist[v], v);
                }
            }
        }

        int ans = 0;
        for(int i = 0; i < n; ++i) {
            if(dist[i] == INF) return -1;
            ans = max(ans, dist[i]);
        }
        return ans;
    }
};