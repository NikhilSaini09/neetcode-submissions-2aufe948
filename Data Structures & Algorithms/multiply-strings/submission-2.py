class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == "0" or num2 == "0":
            return "0"

        n, m = len(num1), len(num2)
        ans = [0] * (n + m)

        for i in range(n - 1, -1, -1):
            d1 = int(num1[i])
            for j in range(m - 1, -1, -1):
                d2 = int(num2[j])

                p1, p2 = i + j, i + j + 1
                total = (d1 * d2) + ans[p2]

                carry, remainder = divmod(total, 10)
                ans[p1] += carry
                ans[p2] = remainder

        return "".join(map(str, ans)).lstrip("0")