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
    private Map<Integer, Integer> inMap = new HashMap<>();
    private int pInd = 0;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        for(int i = 0; i < inorder.length; ++i) {
            inMap.put(inorder[i], i);
        }
        return dfs(preorder, 0, inorder.length - 1);
    }

    private TreeNode dfs(int[] preorder, int start, int end) {
        if(start > end) return null;

        TreeNode cur = new TreeNode(preorder[pInd++]);
        int mid = inMap.get(cur.val);

        cur.left = dfs(preorder, start, mid - 1);
        cur.right = dfs(preorder, mid + 1, end);
        return cur;
    }
}
