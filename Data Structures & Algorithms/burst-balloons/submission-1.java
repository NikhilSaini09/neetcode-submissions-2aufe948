class Solution {
    public int maxCoins(int[] nums) {
        int n = nums.length;
        int[] a = new int[n + 2];
        a[0] = 1;
        for(int i = 0; i < n; ++i) a[i + 1] = nums[i];
        a[n + 1] = 1;

        int[][] dp = new int[n + 2][n + 2];
        for(int i = n; i > 0; --i) {
            for(int j = i; j <= n; ++j) {
                int maxi = 0;
                for(int k = i; k <= j; ++k) {
                    maxi = Math.max(maxi, a[i - 1] * a[k] * a[j + 1] + dp[i][k - 1] + dp[k + 1][j]);
                }
                dp[i][j] = maxi;
            }
        }

        return dp[1][n];
    }
}
