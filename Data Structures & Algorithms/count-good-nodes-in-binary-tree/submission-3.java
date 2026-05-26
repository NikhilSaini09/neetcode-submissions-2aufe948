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
    public int goodNodes(TreeNode root) {
        return dfs(root, -150);
    }
    private int dfs(TreeNode root, int high) {
        if(root == null) return 0;
        int cur = (root.val >= high) ? 1 : 0;
        high = Math.max(high, root.val);
        return cur + dfs(root.left, high) + dfs(root.right, high);
    }
}
