class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n, m = len(s), len(p)
        dp = [False] * (m + 1)
        dp[0] = True
        
        for j in range(1, m + 1):
            if p[j - 1] == '*':
                dp[j] = dp[j - 2]
                
        for i in range(1, n + 1):
            next_dp = [False] * (m + 1)
            for j in range(1, m + 1):
                if p[j - 1] == '.' or s[i - 1] == p[j - 1]:
                    next_dp[j] = dp[j - 1]
                elif p[j - 1] == '*':
                    next_dp[j] = next_dp[j - 2]
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        next_dp[j] = next_dp[j] or dp[j]
            dp = next_dp
            
        return dp[m]