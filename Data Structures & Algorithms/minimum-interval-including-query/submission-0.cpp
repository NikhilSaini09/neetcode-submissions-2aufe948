class Solution {
public:
    vector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {
        int n = intervals.size(), m = queries.size(), i = 0;
        sort(intervals.begin(), intervals.end());

        vector<int> idx(m);
        iota(idx.begin(), idx.end(), 0);
        sort(idx.begin(), idx.end(), [&](int i, int j) {
            return queries[i] < queries[j];
        });

        vector<int> ans(m);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        for(int qidx : idx) {
            int j = queries[qidx];

            while(i < n && intervals[i][0] <= j) {
                int &l = intervals[i][0], &r = intervals[i++][1];
                pq.emplace(r - l + 1, r);
            }
            while(!pq.empty() && pq.top().second < j) pq.pop();

            ans[qidx] = pq.empty() ? -1 : pq.top().first;
        }
        return ans;
    }
};
