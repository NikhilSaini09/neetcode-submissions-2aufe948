class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        ans = set()
        for e in emails:
            i, s = 0, ""
            while e[i] not in ["@", "+"]:
                if e[i] != ".":
                    s += e[i]
                i += 1
            while e[i] != "@":
                i += 1
            ans.add((s, e[i + 1:]))
        return len(ans)