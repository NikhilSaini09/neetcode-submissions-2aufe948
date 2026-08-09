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





// class Solution {
// public:
//     // Bottom Up DP
//     bool wordBreak(string s, vector<string>& wordDict) 
//     {
//         // memoize result of whether we can segment string i->end()
//         vector<bool> dp(s.length() + 1, false);
//         dp[s.length()] = true; // empty string is valid

//         for(int i = s.length() - 1; i >= 0; i--)
//         {
//             for(const string& word : wordDict)
//             {
//                 // if s[i] -> s[i + len(word)] is a word, update dp table
//                 if (i + word.length() <= s.length())
//                 {
//                     if (s.substr(i, word.length()) == word)
//                     {
//                         // dp[i] is breakable, but whether the whole segment through
//                         // the end of the string is breakable depends on the next word as well
//                         dp[i] = dp[i + word.length()];
//                     }
//                 }
//                 if (dp[i]) break; // early break to avoid redundant computation
//             }
//         }
//         return dp[0];
//     }
// };
