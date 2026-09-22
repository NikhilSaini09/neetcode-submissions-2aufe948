class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        ans = []
        for st, ed in intervals:
            if not ans or ans[-1][1] < st:
                ans.append([st, ed])
            else:
                ans[-1][1] = max(ans[-1][1], ed)
        return ans