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

public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if(root == null) return "";
        StringBuilder sb = new StringBuilder();
        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);

        while(!q.isEmpty()) {
            TreeNode cur = q.poll();

            if(cur == null) {
                sb.append("#,");
                continue;
            }

            sb.append(cur.val).append(",");
            q.add(cur.left);
            q.add(cur.right);
        }

        return sb.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if(data.isEmpty()) return null;

        String[] nodes = data.split(",");
        TreeNode root = new TreeNode(Integer.parseInt(nodes[0]));

        Queue<TreeNode> q = new LinkedList<>();
        q.add(root);

        int i = 1;
        while(!q.isEmpty()) {
            TreeNode cur = q.poll();

            if(!nodes[i].equals("#")) {
                cur.left = new TreeNode(Integer.parseInt(nodes[i]));
                q.add(cur.left);
            }
            ++i;

            if(i < nodes.length && !nodes[i].equals("#")) {
                cur.right = new TreeNode(Integer.parseInt(nodes[i]));
                q.add(cur.right);
            }
            ++i;
        }

        return root;
    }
}
