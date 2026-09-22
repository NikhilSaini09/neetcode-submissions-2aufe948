class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end());

        vector<vector<int>> sol;

        // for(int i=0; i<intervals.size(); i++) {
        for(const auto &interval : intervals) {
            int st = interval[0], end = interval[1];

            if(sol.empty() || sol.back()[1] < st) sol.push_back(interval);
            else sol.back()[1] = max(end, sol.back()[1]);
        }

        return sol;
    }
};
