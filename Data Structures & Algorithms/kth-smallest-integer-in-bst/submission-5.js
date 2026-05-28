/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const st = [];
        let cur = root;

        while(cur || st.length > 0) {
            while(cur) {
                st.push(cur);
                cur = cur.left;
            }

            const node = st.pop();

            if(--k == 0) return node.val;

            cur = node.right;
        }

        return -1;
    }
}
