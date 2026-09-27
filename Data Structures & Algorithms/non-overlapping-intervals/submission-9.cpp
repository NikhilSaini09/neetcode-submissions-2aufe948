class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        int ans = 0, last = INT_MIN;
        sort(intervals.begin(), intervals.end(), [](const vector<int> &i, const vector<int> &j) {
            return i[1] < j[1];
        });
        for(vector<int> &i : intervals) {
            if(i[0] >= last) last = i[1];
            else ++ans;
        }
        return ans;
    }
};
