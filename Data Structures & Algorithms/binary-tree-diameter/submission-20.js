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
    #dia;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.#dia = 0;
        this.#dfs(root);
        return this.#dia;
    }

    #dfs(node) {
        if(!node) return 0;

        const lh = this.#dfs(node.left);
        const rh = this.#dfs(node.right);

        this.#dia = Math.max(this.#dia, lh + rh);
        return 1 + Math.max(lh, rh);
    }
}
