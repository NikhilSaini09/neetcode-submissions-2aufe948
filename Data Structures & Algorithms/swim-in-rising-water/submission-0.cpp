class Solution {
public:
    int swimInWater(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<vector<bool>> isVisited(n, vector<bool> (n, false));

        priority_queue<pair<int, pair<int, int>>, vector<pair<int, pair<int, int>>>, greater<pair<int, pair<int, int>>>> pq;
        pq.push({grid[0][0], {0, 0}});  // pq of vector then {grid[0][0], 0, 0} or tuple<int, int, int> then same
        isVisited[0][0] = true;

        int dirs[5] = {-1, 0, 1, 0, -1};
        int ans = 0;

        while(!pq.empty()) {
            auto &it = pq.top();
            int time = it.first;
            int r = it.second.first;
            int c = it.second.second;
            pq.pop();

            ans = max(ans, time);
            if(r == n-1 && c == n-1) return ans;

            for(int i=0; i<4; ++i) {
                int nr = r + dirs[i];
                int nc = c + dirs[i + 1];

                if(nr>=0 && nr<n && nc>=0 && nc<n && !isVisited[nr][nc]) {
                    isVisited[nr][nc] = true;
                    pq.push({grid[nr][nc], {nr, nc}});
                }
            }
        }

        return -1;
    }
};
