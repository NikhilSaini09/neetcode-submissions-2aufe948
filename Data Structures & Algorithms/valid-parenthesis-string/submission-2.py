class Solution:
    def checkValidString(self, s: str) -> bool:
        mini, maxi = 0, 0
        for c in s:
            if c == '(':
                maxi += 1
                mini += 1
            elif c == ')':
                maxi -= 1
                mini -= 1
            else:
                maxi += 1
                mini -= 1

            if maxi < 0:
                return False
            mini = max(0, mini)
        return mini == 0