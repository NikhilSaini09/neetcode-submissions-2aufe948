// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return head;

        let temp = head;

        while(temp) {
            const nextNode = temp.next;
            temp.next = new Node(temp.val);
            temp.next.next = nextNode;
            temp = temp.next.next;
        }

        temp = head;
        while(temp) {
            if(temp.random) temp.next.random = temp.random.next;
            temp = temp.next.next;
        }

        temp = head;
        const newHead = head.next;

        while(temp) {
            const copy = temp.next;
            temp.next = copy.next;
            if(copy.next) copy.next = copy.next.next;
            temp = temp.next;
        }

        return newHead;
    }
}
