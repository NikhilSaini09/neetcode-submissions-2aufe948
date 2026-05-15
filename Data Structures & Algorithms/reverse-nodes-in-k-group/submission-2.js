/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let curr = head;
        let prev = null;
        const st = [];
        let cnt = 0;

        while(curr) {
            st.push(curr);
            curr = curr.next;
            cnt++;

            if(cnt === k) {
                while(st.length) {
                    if(prev) {
                        prev.next = st.pop();
                        prev = prev.next;
                    } else {
                        head = st.pop();
                        prev = head;
                    }
                }
                prev.next = curr;
                cnt = 0;
            }
        }

        return head;
    }
}
