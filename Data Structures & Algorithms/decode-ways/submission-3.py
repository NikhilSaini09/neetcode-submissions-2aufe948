class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0
        si, d = 1, 1
        for i in range(1, len(s)):
            curr = 0
            if not s[i] == '0':
                curr += si
            dou = int(s[i - 1:i + 1])
            if 10 <= dou <= 26:
                curr += d
            si, d = curr, si
        
        return si