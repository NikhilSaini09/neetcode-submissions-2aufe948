class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        n, m = len(text1), len(text2)
        dp, cur = [0] * (m + 1), [0] * (m + 1)

        for i in range(1, n + 1):
            for j in range(1, m + 1):
                if text1[i - 1] == text2[j - 1]:
                    cur[j] = dp[j - 1] + 1
                else:
                    cur[j] = max(dp[j], cur[j - 1])
            dp, cur = cur, dp
        
        return dp[m]