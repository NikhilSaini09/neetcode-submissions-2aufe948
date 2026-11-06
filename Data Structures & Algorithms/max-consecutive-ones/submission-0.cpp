class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int cur = 0, ans = 0;
        for(int n : nums) {
            if(n == 1) cur++;
            else {
                ans = max(ans, cur);
                cur = 0;
            }
        }
        ans = max(ans, cur);
        return ans;
    }
};