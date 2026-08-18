class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int totalSum = 0;
        for(int num : nums) totalSum += num;

        target = Math.abs(target);
        int rem = totalSum - target;
        if(rem < 0 || (rem % 2 != 0)) return 0;
        
        int k = rem >> 1;
        int[] dp = new int[k + 1];
        dp[0] = 1;

        for(int num : nums) {
            for(int j = k; j >= num; --j) {       // used once
            // for(int j = num; j <= k; ++j) {      // one element unlimited times
                dp[j] += dp[j - num];
            }
        }

        return dp[k];
    }
}
