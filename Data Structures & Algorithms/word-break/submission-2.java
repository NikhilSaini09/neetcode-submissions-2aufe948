class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        int[] dp = new int[s.length()];
        Arrays.fill(dp, -1);
        return dfs(wordDict, dp, s, 0);
    }
    private boolean dfs(List<String> wordDict, int[] dp, String s, int i) {
        if(i == s.length()) return true;
        if(dp[i] != -1) return dp[i] == 1 ? true : false;

        for(String w : wordDict) {
            int len = w.length();
            // if(i + len <= s.length() && s.regionMatches(i, w, 0, i + len)) {
            if(i + len <= s.length() && match(s, w, i, len)) {
                if(dfs(wordDict, dp, s, i + len)) {
                    dp[i] = 1;
                    return true;
                }
            }
        }

        dp[i] = 0;
        return false;
    }
    private boolean match(String s, String w, int i, int j) {
        for(int k = 0; k < j; ++k) {
            if(s.charAt(i + k) != w.charAt(k)) return false;
        }
        return true;
    }
}
