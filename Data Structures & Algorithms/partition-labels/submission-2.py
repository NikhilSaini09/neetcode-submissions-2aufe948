class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = {c: i for i, c in enumerate(s)}

        ans = []
        st = ed = 0
        for i, c in enumerate(s):
            ed = max(ed, last[c])
            if i == ed:
                ans.append(ed - st + 1)
                st = i + 1
        return ans