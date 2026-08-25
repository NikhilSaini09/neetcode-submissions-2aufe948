class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int ans = INT_MIN, cur = 0;
        for(int n : nums) {
            cur = max(n, cur + n);
            ans = max(ans, cur);
        }
        return ans;
    }
};
