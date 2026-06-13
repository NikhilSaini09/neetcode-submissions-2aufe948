class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []

        def generate(s: str, open: int, close: int):
            if open == n and close == n:
                ans.append(s)

            if open < n:
                generate(s + '(', open + 1, close)

            if close < open:
                generate(s + ')', open, close + 1)
        
        generate("", 0, 0)
        return ans