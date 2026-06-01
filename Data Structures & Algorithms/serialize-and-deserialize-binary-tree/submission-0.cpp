/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */

class Codec {
public:
    // Encodes a tree to a single string.
    string serialize(TreeNode* root) {
        string s = "";
        if(!root) return s;
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()) {
            TreeNode* cur = q.front();
            q.pop();

            if(!cur) {
                s.append("#,");     // s += "#,";  // string doesnt have emplace_back()
                continue;
            }

            s.append(to_string(cur->val) + ',');    // push_back() only supports single char

            q.push(cur->left);
            q.push(cur->right);
        }

        return s;
    }

    // Decodes your encoded data to tree.
    TreeNode* deserialize(string data) {
        if(data.size() == 0) return nullptr;

        stringstream ss(data);
        string str;
        getline(ss, str, ',');       // returns true false stating success or failure

        TreeNode* root = new TreeNode(stoi(str));
        queue<TreeNode*> q;
        q.push(root);

        while(!q.empty()) {
            TreeNode* cur = q.front();
            q.pop();

            getline(ss, str, ',');
            if(str != "#") {
                cur->left = new TreeNode(stoi(str));
                q.push(cur->left);
            }

            getline(ss, str, ',');
            if(str != "#") {
                cur->right = new TreeNode(stoi(str));
                q.push(cur->right);
            }
        }

        return root;
    }
};
