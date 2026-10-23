class CountSquares {
    unordered_map<int, unordered_map<int, int>> mpp;
public:
    CountSquares() {}
    
    void add(const vector<int> &point) {
        mpp[point[0]][point[1]]++;
    }
    
    int count(const vector<int> &point) {
        int ans = 0, x = point[0], y = point[1];
        for(auto &[p, c] : mpp[x]) {
            if(p == y) continue;
            int len = p - y, u = x + len, d = x - len;
            ans += c * mpp[u][y] * mpp[u][p];
            ans += c * mpp[d][y] * mpp[d][p];
        }
        return ans;
    }
};
