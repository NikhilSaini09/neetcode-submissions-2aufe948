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
    mergeTwoList(list1, list2) {
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

    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null;
        if(lists.length === 1) return lists[0];

        const mid = Math.floor(lists.length / 2);
        const leftSide = lists.slice(0, mid);
        const rightSide = lists.slice(mid);

        const l1 = this.mergeKLists(leftSide);
        const l2 = this.mergeKLists(rightSide);

        return this.mergeTwoList(l1, l2);
    }
}




// class Solution {
//     /**
//      * @param {ListNode[]} lists
//      * @return {ListNode}
//      */
//     mergeKLists(lists) {
//         const minHeap = new MinPriorityQueue((node) => node.val);

//         // const minHeap = new PriorityQueue((a, b) => a.val - b.val);

//         for(const list of lists) {
//             if(list) minHeap.enqueue(list);
//         }

//         const dummy = new ListNode();
//         let temp = dummy;
//         while(!minHeap.isEmpty()) {
//             // const { element } = minHeap.dequeue();
//             // const node = element;
//             const node = minHeap.dequeue();

//             temp.next = node;
//             temp = node;

//             if(node.next) minHeap.enqueue(node.next);
//         }

//         return dummy.next;
//     }
// }