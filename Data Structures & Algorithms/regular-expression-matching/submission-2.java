class Solution {
    public boolean isMatch(String s, String p) {
        int n = s.length(), m = p.length();
        boolean[] dp = new boolean[m + 1];
        dp[0] = true;
        for(int j = 1; j <= m; ++j) {
            if(p.charAt(j - 1) == '*') dp[j] = dp[j - 2];
        }

        for(int i = 1; i <= n; ++i) {
            boolean[] next = new boolean[m + 1];
            for(int j = 1; j <= m; ++j) {
                if(p.charAt(j - 1) == '.' || s.charAt(i - 1) == p.charAt(j - 1)) {
                    next[j] = dp[j - 1];
                } else if(p.charAt(j - 1) == '*') {
                    next[j] = next[j - 2];
                    if(p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
                        next[j] = next[j] || dp[j];
                    }
                }
            }
            dp = next;
        }

        return dp[m];
    }
}