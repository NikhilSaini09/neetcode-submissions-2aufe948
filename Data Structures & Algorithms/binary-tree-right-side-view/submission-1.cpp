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

class Solution {
public:
    vector<int> rightSideView(TreeNode* root) {
        vector<int> rightView;
        if(!root) return rightView;
        queue<pair<TreeNode*, int>> q;
        q.emplace(root, 0);

        while(!q.empty()) {
            auto [cur, row] = q.front();
            q.pop();

            if(rightView.size() == row) rightView.emplace_back(cur->val);

            if(cur->right) q.emplace(cur->right, row + 1);
            if(cur->left)  q.emplace(cur->left, row + 1);
        }

        return rightView;
    }
};
