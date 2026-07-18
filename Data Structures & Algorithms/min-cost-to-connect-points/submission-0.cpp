class Solution {
public:
    int minCostConnectPoints(vector<vector<int>>& points) {
        int n = points.size();
        if(n < 2) return 0;

        vector<int> minDist(n, INT_MAX);
        vector<bool> inMST(n, false);
        
        int sum = 0;
        int curr = 0;
        minDist[0] = 0;

        for(int i = 0; i < n - 1; ++i) {
            inMST[curr] = true;
            int next_node = -1;
            int min_edge = INT_MAX;

            int x1 = points[curr][0];
            int y1 = points[curr][1];

            for(int j = 0; j < n; ++j) {
                if(inMST[j]) continue;

                int d = abs(x1 - points[j][0]) + abs(y1 - points[j][1]);
                if(d < minDist[j]) minDist[j] = d;

                if(minDist[j] < min_edge) {
                    min_edge = minDist[j];
                    next_node = j;
                }
            }
            
            sum += min_edge;
            curr = next_node;
        }
        
        return sum;
    }
};
