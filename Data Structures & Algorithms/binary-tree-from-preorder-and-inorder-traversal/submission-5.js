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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inMap = new Map();
        let pInd = 0;

        for(let i = 0; i < inorder.length; ++i) {
            inMap.set(inorder[i], i);
        }

        function dfs(start, end) {
            if(start > end) return null;

            const cur = new TreeNode(preorder[pInd++]);
            const mid = inMap.get(cur.val);

            cur.left = dfs(start, mid - 1);
            cur.right = dfs(mid + 1, end);
            return cur;
        };

        return dfs(0, inorder.length - 1);
    }
}
