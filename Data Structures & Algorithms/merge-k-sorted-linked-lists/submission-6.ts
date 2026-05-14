/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// class ListNode {
//         val: number;
//         next: ListNode | null;
//         constructor(val: number = 0, next: ListNode | null = null) {
//                 this.val = val;
//                 this.next = next;
//         }
// }

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[] | null): ListNode | null {
        if(!lists || lists.length === 0) return null;
        if(lists.length === 1) return lists[0];

        const mid = Math.floor(lists.length / 2);
        const leftSide = lists.slice(0, mid);
        const rightSide = lists.slice(mid);

        const l1 = this.mergeKLists(leftSide);
        const l2 = this.mergeKLists(rightSide);

        return this.mergeTwoList(l1, l2);
    }

    mergeTwoList(list1 : ListNode | null, list2 : ListNode | null): ListNode | null {
        if(!list1) return list2;
        if(!list2) return list1;

        let newList = new ListNode(-1);
        let curr = newList;

        while(list1 && list2) {
            if(list1.val <= list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        if(list1) curr.next = list1;
        else if(list2) curr.next = list2;

        return newList.next;
    }
}
