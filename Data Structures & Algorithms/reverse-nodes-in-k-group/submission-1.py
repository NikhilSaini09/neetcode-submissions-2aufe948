# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        curr = head
        prev = None
        st = []
        cnt = 0

        while curr:
            st.append(curr)
            curr = curr.next
            cnt += 1

            if cnt == k:
                while st:
                    if prev == None:
                        head = st.pop()
                        prev = head
                    else:
                        prev.next = st.pop()
                        prev = prev.next
                
                prev.next = curr
                cnt = 0

        return head