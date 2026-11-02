class Solution:
    def reverse(self, x: int) -> int:
        mini, maxi = -2147483648, 2147483647
        ans = 0
        while x != 0:
            if ans > (maxi / 10) or ans < (mini / 10):
                return 0
            ans = ans * 10 + int(math.fmod(x, 10))
            x = int(x / 10)
        return ans