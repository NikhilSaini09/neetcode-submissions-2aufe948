# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:    
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        minHeap = []

        for i, l in enumerate(lists):
            if l:
                heapq.heappush(minHeap, (l.val, i, l))

        dummy = ListNode()
        temp = dummy

        while minHeap:
            val, i, node = heapq.heappop(minHeap)

            temp.next = node
            temp = temp.next

            if node.next:
                heapq.heappush(minHeap, (node.next.val, i, node.next))

        return dummy.next