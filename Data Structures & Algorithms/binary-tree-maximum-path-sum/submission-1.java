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
    private int maxPS = Integer.MIN_VALUE;

    public int maxPathSum(TreeNode root) {
        maxPS = Integer.MIN_VALUE;
        helper(root);

        return maxPS;
    }

    private int helper(TreeNode root) {
        if(root == null) return 0;

        int leftMax = Math.max(0, helper(root.left));
        int rightMax = Math.max(0, helper(root.right));

        maxPS = Math.max(maxPS, leftMax + rightMax + root.val);

        return (Math.max(leftMax, rightMax) + root.val);
    }
}
