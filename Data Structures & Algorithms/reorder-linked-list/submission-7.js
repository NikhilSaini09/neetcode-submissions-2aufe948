/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class Solution {
//     /**
//      * @param {ListNode} head
//      * @return {void}
//      */
//     reorderList(head) {
//         let slow = head;
//         let fast = head;

//         while(fast.next && fast.next.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         let right = this.reverse(slow.next);
//         let left = head;
//         slow.next = null;
//         while(left && right) {
//             slow = left.next;
//             fast = right.next;
//             left.next = right;
//             right.next = slow;
//             left = slow;
//             right = fast;
//         }
//     }

//     reverse(head) {
//         if(!head) return head;
//         let ahead;
//         let prev = null;
//         while(head) {
//             ahead = head.next;
//             head.next = prev;
//             prev = head;
//             head = ahead;
//         }

//         return prev;
//     }
// }


class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let cur = head;
        let nodes = [];
        while(cur){
            nodes.push(cur);
            cur = cur.next;
        }

        let i = 0;
        let j = nodes.length - 1;

        while(i < j){
            nodes[i].next = nodes[j];
            i++;
            if(i >= j)break;
            nodes[j].next = nodes[i];
            j--;
        }
        nodes[i].next = null;
    }
}