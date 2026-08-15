class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        int n = text1.length(), m = text2.length();
        int[] dp = new int[m + 1];
        int[] cur = new int[m + 1];

        for(int i = 1; i <= n; ++i) {
            for(int j = 1; j <= m; ++j) {
                if(text1.charAt(i - 1) == text2.charAt(j - 1)) cur[j] = 1 + dp[j - 1];
                else cur[j] = Math.max(dp[j], cur[j - 1]);
                System.out.println(cur[j]);
            }
            // dp = cur.clone();
            // dp = Arrays.copyOf(cur, cur.length);
            System.arraycopy(cur, 0, dp, 0, cur.length);
        }

        return dp[m];
    }
}
