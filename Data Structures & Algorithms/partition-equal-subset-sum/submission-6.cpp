class Solution {
public:
    bool canPartition(vector<int>& nums) {
        int totalSum = 0;
        for(int n : nums) totalSum += n;

        if(totalSum % 2 != 0) return false;
        int target = totalSum >> 1;

        // vector<bool> dp(target + 1, false);
        // dp[0] = true;

        // for(int i=0; i<nums.size(); ++i) {
        //     if(dp[target]) return true;
        //     for(int j=target; j>=nums[i]; --j) {
        //         dp[j] = dp[j] || dp[j - nums[i]];
        //     }
        // }
        // return dp[target];

        std::bitset<20001> dp; 
        dp[0] = 1;
        for(int num : nums) {
            dp |= (dp << num);
        }
        return dp[target];
    }
};
