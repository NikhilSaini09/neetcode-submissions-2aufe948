class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        return heapq.nsmallest(
            k, points, key=lambda p: p[0]**2 + p[1]**2
        )


        # max_heap = []
        
        # for x, y in points:
        #     dist_sq = -(x**2 + y**2)

        #     if len(max_heap) == k:
        #         heapq.heappushpop(max_heap, (dist_sq, [x, y]))
        #     else:
        #         heapq.heappush(max_heap, (dist_sq, [x, y]))
        
        # return [p for d, p in max_heap]