class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums, target) {
        const total = nums.reduce((a, b) => a + b, 0);
        target = Math.abs(target);
        const rem = total - target;
        if(rem < 0 || rem % 2 != 0) return 0;

        const k = rem >> 1;
        const dp = new Array(k + 1).fill(0);
        dp[0] = 1;

        for(const num of nums) {
            for(let i = k; i >= num; --i) {
                dp[i] += dp[i - num];
            }
        }

        return dp[k];
    }
}
