class Solution:
    def minInterval(self, intervals: List[List[int]], queries: List[int]) -> List[int]:
        intervals.sort()

        min_heap = []
        ans = [-1] * len(queries)
        i = 0
        
        for q, j in sorted((q, idx) for idx, q in enumerate(queries)):
            while i < len(intervals) and intervals[i][0] <= q:
                l, r = intervals[i]
                heapq.heappush(min_heap, (r - l + 1, r))
                i += 1
            while min_heap and min_heap[0][1] < q:
                heapq.heappop(min_heap)
            if min_heap:
                ans[j] = min_heap[0][0]
        
        return ans