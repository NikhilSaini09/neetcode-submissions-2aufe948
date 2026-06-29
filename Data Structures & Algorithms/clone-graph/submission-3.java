/*
Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if(node == null) return null;

        Queue<Node> q = new LinkedList<>();
        q.add(node);
        Map<Node, Node> mp = new HashMap<>();
        mp.put(node, new Node(node.val));

        while(!q.isEmpty()) {
            Node cur = q.poll();

            for(Node nei : cur.neighbors) {
                if(!mp.containsKey(nei)) {
                    mp.put(nei, new Node(nei.val));
                    q.add(nei);
                }
                mp.get(cur).neighbors.add(mp.get(nei));
            }
        }

        return mp.get(node);
    }
}