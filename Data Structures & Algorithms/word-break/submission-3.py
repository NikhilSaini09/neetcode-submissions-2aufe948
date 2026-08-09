class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        n = len(s)
        dp = [-1] * n

        def match(w: str, i: int, j: int) -> bool:
            for k in range(0, j):
                if s[i + k] != w[k]:
                    return False
            return True

        def dfs(i: int) -> bool:
            if i == n:
                return True
            if dp[i] != -1:
                return dp[i]
            
            for w in wordDict:
                m = len(w)
                if i + m <= n and match(w, i, m):
                    if dfs(i + m):
                        dp[i] = 1
                        return True
            
            dp[i] = 0
            return False

        return dfs(0)