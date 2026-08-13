class Solution {
    public boolean canPartition(int[] nums) {
        int total = 0;
        for(int n : nums) total += n;

        if(total % 2 != 0) return false;
        int target = total >> 1;

        boolean[] dp = new boolean[target + 1];
        dp[0] = true;

        for(int i = 0; i < nums.length; ++i) {
            if(dp[target]) return true;
            for(int j = target; j >= nums[i]; --j) {
                dp[j] = dp[j] || dp[j - nums[i]];
            }
        }
        return dp[target];
    }
}
