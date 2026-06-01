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

// class Codec {
//     /**
//      * Encodes a tree to a single string.
//      *
//      * @param {TreeNode} root
//      * @return {string}
//      */
//     serialize(root) {
//         const result = [];
//         function dfs(node){
//             if(!node) {
//                 result.push("null");
//                 return;
//             }
//             result.push(node.val.toString());
//             dfs(node.left);
//             dfs(node.right);
//         }   

//         dfs(root);
//         return result.join(",");
//     }

//     /**
//      * Decodes your encoded data to tree.
//      *
//      * @param {string} data
//      * @return {TreeNode}
//      */
//     deserialize(data) {
//         const nodes = data.split(",");
//         let index = 0;

//         function buildTree() {
//             if (nodes[index] === "null") {
//                 index++;
//                 return null;
//             }

//             const node = new TreeNode(parseInt(nodes[index]));
//             index++;
//             node.left = buildTree();
//             node.right = buildTree();
//             return node;
//         }

//         return buildTree();
//     }
// }


class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if(!root) return "";
        let s = "";
        const q = [root];
        // const q = new Deque([root]);

        while(q.length > 0) {
            const cur = q.shift(); // O(n) but fine for tree levels
            // const cur = q.popFront(); // O(1)

            if(!cur) {
                s += "#,";
                continue;
            }

            s += cur.val + ",";
            q.push(cur.left);
            q.push(cur.right);
        }
        return s;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if(data.length === 0) return null;

        const values = data.split(',');
        let i = 0;

        const root = new TreeNode(parseInt(values[i++]));
        const q = [root];
        // const q = new Deque([root]);

        while(q.length > 0) {
            const cur = q.shift();
            // const cur = q.popFront();

            const leftVal = values[i++];
            if(leftVal !== "#" && leftVal !== undefined && leftVal !== "") {
                cur.left = new TreeNode(parseInt(leftVal));
                q.push(cur.left);
            }

            const rightVal = values[i++];
            if(rightVal !== "#" && rightVal !== undefined && rightVal !== "") {
                cur.right = new TreeNode(parseInt(rightVal));
                q.push(cur.right);
            }
        }

        return root;
    }
}
