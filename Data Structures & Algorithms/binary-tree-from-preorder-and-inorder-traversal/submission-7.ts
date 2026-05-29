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
    buildTree(preorder: number[], inorder: number[]): TreeNode {
        const inMap = new Map();
        inorder.forEach((val, i) => inMap.set(val, i))
        let pInd = 0;

        function dfs(start: number, end: number): TreeNode | null {
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
