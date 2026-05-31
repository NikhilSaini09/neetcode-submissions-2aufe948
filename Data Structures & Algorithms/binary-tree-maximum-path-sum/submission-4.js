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

// class Solution {
//     #maxPS;
//     /**
//      * @param {TreeNode} root
//      * @return {number}
//      */
//     maxPathSum(root) {
//         this.#maxPS = -Infinity;
//         this.#helper(root);

//         return this.#maxPS;
//     }

//     #helper(root) {
//         if(!root) return 0;

//         const leftMax = Math.max(0, this.#helper(root.left));
//         const rightMax = Math.max(0, this.#helper(root.right));

//         this.#maxPS = Math.max(this.#maxPS, leftMax + root.val + rightMax);
//         return Math.max(leftMax, rightMax) + root.val;
//     }
// }


class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxPathSum(root) {
        let maxResult = -Infinity;
        
        const dfs = (node) => {
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