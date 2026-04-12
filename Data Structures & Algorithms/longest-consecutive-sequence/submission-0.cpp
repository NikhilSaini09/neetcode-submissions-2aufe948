class Solution {
public:
    int longestConsecutive(vector<int>& nums) {
        int ans = 0;
        unordered_set<int> se(nums.begin(), nums.end());

        for(int n : nums) {
            if(!se.count(n - 1)) {
                int cur = n + 1;
                while(se.count(cur)) ++cur;

                ans = max(ans, cur - n);
            }
        }

        return ans;
    }
};
