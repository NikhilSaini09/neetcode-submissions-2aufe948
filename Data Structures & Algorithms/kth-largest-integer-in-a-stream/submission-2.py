class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.__k = k
        self.__min_heap = nums

        heapq.heapify(self.__min_heap)
        while len(self.__min_heap) > self.__k:
            heapq.heappop(self.__min_heap)

    def add(self, val: int) -> int:
        heapq.heappush(self.__min_heap, val)

        if len(self.__min_heap) > self.__k:
            heapq.heappop(self.__min_heap)
        
        return self.__min_heap[0]