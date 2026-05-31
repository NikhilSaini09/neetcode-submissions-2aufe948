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
    maxPathSum(root: TreeNode | null): number {
        let maxResult = -Infinity;
        
        const dfs = (node: TreeNode | null): number => {
            if(!node) return 0;

            const maxLeft = Math.max(0, dfs(node.left));
            const maxRight = Math.max(0, dfs(node.right));

            maxResult = Math.max(node.val + maxLeft + maxRight, maxResult);
            return node.val + Math.max(maxLeft, maxRight); 
        }

        dfs(root);
        return maxResult;
    }
}
