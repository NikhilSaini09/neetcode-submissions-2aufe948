class Solution {
    bool dfs(vector<string> &wordDict, vector<int> &dp, const string &s, int u) {
        if(u == s.length()) return true;
        if(dp[u] != -1) return dp[u];

        for(const auto &w : wordDict) {
            int len = w.length();
            if(u + len <= s.length() && s.compare(u, len, w) == 0) {
                if(dfs(wordDict, dp, s, u + len)) return dp[u] = true;
            }
        }

        return dp[u] = false;
    }
public:
    bool wordBreak(string s, vector<string>& wordDict) {
        vector<int> dp(s.length(), -1);
        return dfs(wordDict, dp, s, 0);
    }
};
