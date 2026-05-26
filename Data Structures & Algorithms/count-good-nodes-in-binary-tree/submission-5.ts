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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        return this.#dfs(root, -1e5);
    }

    #dfs(root: TreeNode | null, high: number): number {
        if(!root) return 0;
        const cur = +(root.val >= high);
        high = Math.max(high, root.val);
        return cur + this.#dfs(root.left, high) + this.#dfs(root.right, high);
    }
}
