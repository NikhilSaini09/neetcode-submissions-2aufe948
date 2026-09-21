class Solution:
    def insert(self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
        left, right = [], []
        start, end = newInterval

        for iv in intervals:
            if iv[1] < start:
                left.append(iv)
            elif iv[0] > end:
                right.append(iv)
            else:
                start = min(start, iv[0])
                end = max(end, iv[1])
        
        return left + [[start, end]] + right