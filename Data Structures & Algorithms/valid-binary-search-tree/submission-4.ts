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

    #prev: number = -Infinity;
    isValidBST(root: TreeNode | null): boolean {
        if(!root) return true;

        if(!this.isValidBST(root.left)) return false;

        if(root.val <= this.#prev) return false;
        this.#prev = root.val;

        return this.isValidBST(root.right);
    }
}
