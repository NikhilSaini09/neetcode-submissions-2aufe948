class Solution {
public:
    int carFleet(int target, vector<int>& position, vector<int>& speed) {
        int n = position.size();
        vector<int> ind(n);
        iota(ind.begin(), ind.end(), 0);
        sort(ind.begin(), ind.end(), [&](int i, int j) { return position[i] < position[j]; });

        int ans = 0;
        float prev = 0;
        for(int i = n - 1; i >= 0; --i) {
            int idx = ind[i];
            float timeToReach = (float)(target - position[idx]) / speed[idx];
            if(prev < timeToReach) {
                ++ans;
                prev = timeToReach;
            }
        }

        return ans;
    }
};
