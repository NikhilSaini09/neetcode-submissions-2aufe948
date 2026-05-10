"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if not head:
            return head

        temp = head
        while temp:
            nextNode = temp.next
            temp.next = Node(temp.val)
            temp.next.next = nextNode
            temp = temp.next.next

        temp = head
        while temp:
            if temp.random:
                temp.next.random = temp.random.next
            temp = temp.next.next

        temp = head
        newHead = head.next
        while temp:
            copy = temp.next
            temp.next = copy.next
            if copy.next:
                copy.next = copy.next.next
            temp = temp.next

        return newHead