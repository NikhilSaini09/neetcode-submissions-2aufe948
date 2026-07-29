class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n < 2:
            return s
        
        st, max_len = 0, 1
        def expand(l: int, r: int):
            nonlocal st, max_len

            while l >= 0 and r < n and s[l] == s[r]:
                if r - l + 1 > max_len:
                    st, max_len = l, r - l + 1
                l -= 1
                r += 1

        for i in range(n):
            expand(i, i)
            expand(i, i + 1)

        return s[st : st + max_len]