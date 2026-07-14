class Solution {
    vector<int> p;

    void dsu(int n) {
        p.resize(n);
        iota(p.begin(), p.end(), 0);
    }

    int find(int u) {
        if(p[u] == u) return u;
        return p[u] = find(p[u]);
    }

    bool connect(int u, int v) {
        u = find(u), v = find(v);
        if(u == v) return false;
        p[v] = u;
        return true;
    }
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        dsu(edges.size());

        for(const auto &e : edges) {
            if(!connect(e[0] - 1, e[1] - 1)) return vector<int> {e[0], e[1]};
        }

        return vector<int> (2, -1);
    }
};
