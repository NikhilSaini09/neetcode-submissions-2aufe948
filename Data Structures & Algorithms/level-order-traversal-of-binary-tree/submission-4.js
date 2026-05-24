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
     * @return {number[][]}
     */
    levelOrder(root) {
        const ans = [];
        if(!root) return ans;

        const q = new Deque([root]);

        while(!q.isEmpty()) {
            let n = q.size();
            const temp = [];

            while(n--) {
                const node = q.popFront();
                temp.push(node.val);
                if(node.left) q.pushBack(node.left);
                if(node.right) q.pushBack(node.right);
            }

            ans.push(temp);
        }

        return ans;
    }
}
