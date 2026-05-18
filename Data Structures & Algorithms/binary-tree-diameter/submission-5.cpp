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
private:
    int dfs(TreeNode *root, int &dia) {
        if(!root) return 0;

        int lh = dfs(root->left, dia);
        int rh = dfs(root->right, dia);

        dia = max(lh + rh, dia);
        return (max(lh, rh) + 1);
    }
public:
    int diameterOfBinaryTree(TreeNode* root) {
        int dia = 0;
        dfs(root, dia);
        return dia;
    }
};