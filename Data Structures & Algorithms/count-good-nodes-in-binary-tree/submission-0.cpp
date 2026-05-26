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
    void dfs(TreeNode* node, int &cnt, int pmax) {
        if(!node) return;
        if(node->val >= pmax) {
            cnt++;
            pmax = node->val;
        }

        dfs(node->left, cnt, pmax);
        dfs(node->right, cnt, pmax);
    }
public:
    int goodNodes(TreeNode* root) {
        ios::sync_with_stdio(false);
        cin.tie(NULL);
        cout.tie(NULL);

        int cnt = 0;
        dfs(root, cnt, -1e5);
        return cnt;
    }
};
