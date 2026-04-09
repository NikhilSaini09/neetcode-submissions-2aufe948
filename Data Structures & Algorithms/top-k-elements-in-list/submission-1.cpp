class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> ans;
        ans.reserve(k);

        unordered_map<int, int> freq;
        for(int num : nums) freq[num]++;

        vector<vector<int>> buckets(n + 1);
        for(auto &it : freq) buckets[it.second].push_back(it.first);

        for(int i = n; i >= 0 && ans.size() < k; --i) {
            for(int num : buckets[i]) {
                ans.push_back(num);
                if(ans.size() == k) break;
            }
        }

        return ans;
    }
};
