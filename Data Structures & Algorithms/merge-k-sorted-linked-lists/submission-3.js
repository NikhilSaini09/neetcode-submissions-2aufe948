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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // const minHeap = new MinPriorityQueue({
        //     priority: (node) => node.val
        // });

        const minHeap = new PriorityQueue((a, b) => a.val - b.val);

        for(const list of lists) {
            if(list) minHeap.enqueue(list);
        }

        const dummy = new ListNode();
        let temp = dummy;
        while(!minHeap.isEmpty()) {
            // const { element } = minHeap.dequeue();
            // const node = element;
            const node = minHeap.dequeue();

            temp.next = node;
            temp = node;

            if(node.next) minHeap.enqueue(node.next);
        }

        return dummy.next;
    }
}