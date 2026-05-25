/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> rightView = new ArrayList<>();
        if(root == null) return rightView;
        Queue<TreeNode> q = new LinkedList<>();
        // q.add(root);
        q.offer(root);

        while(!q.isEmpty()) {
            int qs = q.size();

            for(int i = 0; i < qs; ++i) {
                TreeNode cur = q.poll();

                if(i == 0) rightView.add(cur.val);
                if(cur.right != null) q.offer(cur.right);
                if(cur.left != null) q.offer(cur.left);
            }

        }

        return rightView;
    }
}
