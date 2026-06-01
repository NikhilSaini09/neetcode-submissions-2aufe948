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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        const result: string[] = [];
        function dfs(node: TreeNode | null) {
            if(!node) {
                result.push("null");
                return;
            }
            result.push(node.val.toString());
            dfs(node.left);
            dfs(node.right);
        }   

        dfs(root);
        return result.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const nodes: string[] = data.split(",");
        let index: number = 0;

        function buildTree(): TreeNode | null {
            if(nodes[index] === "null") {
                index++;
                return null;
            }

            const node: TreeNode | null = new TreeNode(parseInt(nodes[index]));
            index++;
            node.left = buildTree();
            node.right = buildTree();
            return node;
        }

        return buildTree();
    }
}
