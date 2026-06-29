/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        const visited: any = new Map();
        visited.set(null, null)

        const dfs = (n: Node | null) => {
            if(visited.has(n)) return;
            visited.set(n, new Node(n.val));
            for(let nei of n.neighbors) {
                dfs(nei)
                visited.get(n).neighbors.push(visited.get(nei));
            }
        };

        dfs(node);
        return visited.get(node);
        
        
        // if(!node) return null;

        // const q = [node];
        // const clones = new Map();
        // clones.set(node, new Node(node.val));

        // let head = 0;
        // while(head < q.length) {
        //     const cur = q[head++];

        //     for(const nei of cur.neighbors) {
        //         if(!clones.has(nei)) {
        //             clones.set(nei, new Node(nei.val));
        //             q.push(nei);
        //         }
        //         clones.get(cur).neighbors.push(clones.get(nei));
        //     }
        // }

        // return clones.get(node);
    }
}
