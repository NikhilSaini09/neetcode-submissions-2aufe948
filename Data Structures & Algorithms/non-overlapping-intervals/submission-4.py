class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        ans, last = 0, float("-inf")
        intervals.sort(key=lambda x: x[1])
        for st, ed in intervals:
            if st >= last:
                last = ed
            else:
                ans += 1
        return ans