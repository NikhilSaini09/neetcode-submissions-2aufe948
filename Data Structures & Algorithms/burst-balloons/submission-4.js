class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxCoins(nums) {
        const balls = [1, ...nums, 1];
        const n = nums.length;

        const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));
        for(let length = 1; length <= n; length++) {
            for(let i = 1; i <= n - length + 1; i++) {
                const j = i + length - 1;

                let currentMax = 0;
                for(let k = i; k <= j; k++) {
                    const coins = balls[i - 1] * balls[k] * balls[j + 1] + dp[i][k - 1] + dp[k + 1][j];
                    currentMax = Math.max(currentMax, coins);
                }
                dp[i][j] = currentMax;
            }
        }

        return dp[1][n];
    }
}
