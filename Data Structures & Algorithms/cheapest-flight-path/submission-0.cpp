class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        vector<vector<pair<int, int>>> adj(n);
        for(auto &f : flights) {
            int u = f[0], v = f[1], price = f[2];
            adj[u].emplace_back(v, price);
        }

        vector<int> cost(n, 1e9);
        queue<pair<int, int>> q;
        q.emplace(src, 0);
        cost[src] = 0;

        while(!q.empty()) {
            int qSize = q.size();

            while(qSize--) {
                auto [u, c] = q.front();
                q.pop();

                // if(c > cost[u]) continue;  // wrong

                for(auto &p : adj[u]) {
                    int v = p.first, price = p.second;
                    if(cost[v] > c + price) {
                        cost[v] = c + price;
                        q.emplace(v, cost[v]);
                    }
                }
            }

            if(k == 0) break;
            k--;
        }

        return (cost[dst] == 1e9) ? -1 : cost[dst];
    }
};
