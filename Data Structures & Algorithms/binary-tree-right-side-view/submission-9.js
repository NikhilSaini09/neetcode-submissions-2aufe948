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
     * @return {number[]}
     */
    rightSideView(root) {
        const rightView = [];
        if(!root) return rightView;
        const q = new Deque([root]);

        while(!q.isEmpty()) {
            let qs = q.size();
            let i = 0;

            while(qs--) {
                const cur = q.popFront();

                if(i == 0) {rightView.push(cur.val); i = 1;}
                if(cur.right) q.pushBack(cur.right);
                if(cur.left) q.pushBack(cur.left);
            }

        }

        return rightView;
    }
}
