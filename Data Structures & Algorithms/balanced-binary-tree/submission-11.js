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
     * @return {boolean}
     */
    isBalanced(root) {
        return this.#helper(root) != -1;
    }

    #helper(node) {
        if(!node) return 0;

        const lh = this.#helper(node.left);
        if(lh == -1) return -1;
        const rh = this.#helper(node.right);
        if(rh == -1) return -1;

        if(Math.abs(rh - lh) > 1) return -1;
        return 1 + Math.max(lh, rh);
    }
}
