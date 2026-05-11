// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     constructor(val = 0, next = null) {
//  *         this.val = val;
//  *         this.next = next;
//  *     }
//  * }
//  */

// class Solution {
//     /**
//      * @param {ListNode} l1
//      * @param {ListNode} l2
//      * @return {ListNode}
//      */
//     addTwoNumbers(l1, l2) {
//         const dummy = new ListNode();
//         let temp = dummy;
//         let carry = 0;

//         while(l1 || l2 || carry) {
//             let sum = carry;

//             if(l1) {
//                 sum += l1.val;
//                 l1 = l1.next;
//             }
//             if(l2) {
//                 sum += l2.val;
//                 l2 = l2.next;
//             }

//             carry = Math.trunc(sum / 10);
//             temp.next = new ListNode(sum % 10);
//             temp = temp.next;
//         }

//         return dummy.next;
//     }
// }


class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let current = dummy;
        let carry = 0;

        while (l1 !== null || l2 !== null || carry !== 0) {
            const x = l1 !== null ? l1.val : 0;
            const y = l2 !== null ? l2.val : 0;

            const sum = x + y + carry;
            carry = Math.floor(sum / 10);

            current.next = new ListNode(sum % 10);
            current = current.next;

            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }

        return dummy.next;
    }
}
