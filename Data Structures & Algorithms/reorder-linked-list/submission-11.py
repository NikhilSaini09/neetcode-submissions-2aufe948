# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        slow = head
        fast = head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        right = self.reverse(slow.next)
        left = head
        slow.next = None
        while left and right:
            slow = left.next
            fast = right.next
            left.next = right
            right.next = slow
            left = slow
            right = fast
    
    def reverse(self, head: Optional[ListNode]) -> None:
        if not head:
            return head
        ahead = None
        prev = None
        while head:
            ahead = head.next
            head.next = prev
            prev = head
            head = ahead

        return prev