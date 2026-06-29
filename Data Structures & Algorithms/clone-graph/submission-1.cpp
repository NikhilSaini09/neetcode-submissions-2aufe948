/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

class Solution {
public:
    Node* cloneGraph(Node* node) {
        if(!node) return nullptr;

        queue<Node*> q;
        q.push(node);
        unordered_map<Node*, Node*> mp;
        mp[node] = new Node(node->val);

        while(!q.empty()) {
            Node* cur = q.front();
            q.pop();

            for(Node* nei : cur->neighbors) {
                if(!mp.contains(nei)) {
                    mp[nei] = new Node(nei->val);
                    q.push(nei);
                }
                mp[cur]->neighbors.push_back(mp[nei]);
            }
        }

        return mp[node];
    }
};


// class Solution {
//     unordered_map<Node*, Node*> mp;
// public:
//     Node* cloneGraph(Node* node) {
//         if(!node) return nullptr;

//         if(mp.contains(node)) return mp[node];
        
//         Node *clone = new Node(node->val);
//         mp[node] = clone;

//         for(Node *v : node->neighbors) {
//             clone->neighbors.push_back(cloneGraph(v));
//         }

//         return clone;
//     }
// };