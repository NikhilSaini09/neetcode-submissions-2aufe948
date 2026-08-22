class Solution {
    public int minDistance(String word1, String word2) {
        int n = word1.length();
        int m = word2.length();
        
        int[] dp = new int[m + 1];
        for(int i = 0; i <= m; ++i) dp[i] = i;
 
        for(int i = 1; i <= n; ++i) {
            int[] temp = new int[m + 1];
            temp[0] = i;
            for(int j = 1; j <= m; ++j) {
                if(word1.charAt(i - 1) == word2.charAt(j - 1)) temp[j] = dp[j - 1];
                else temp[j] = 1 + Math.min(temp[j - 1], Math.min(dp[j], dp[j - 1]));
            }
            dp = temp;
        }

        return dp[m];
    }
}
