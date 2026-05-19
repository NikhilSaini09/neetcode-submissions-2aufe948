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
    int helper(TreeNode *root) {
        if(!root) return 0;

        int lh = helper(root->left);
        if(lh == -1) return -1;
        int rh = helper(root->right);
        if(rh == -1) return -1;

        if(abs(rh - lh) > 1) return -1;

        return(max(lh, rh) + 1);
    }
public:
    bool isBalanced(TreeNode* root) {
        return helper(root) != -1;
    }
};



// class Solution {
// private:
//     int dfs(TreeNode* root) {
//         if(!root) return 0;
//         int left = dfs(root->left);
//         int right = dfs(root->right);
//         if(left == INT_MAX || right == INT_MAX) return INT_MAX;
//         else if(left - right > 1 || left - right < -1) return INT_MAX;
//         else return max(left, right) + 1;
//     }
// public:
//     bool isBalanced(TreeNode* root) {
//         if(dfs(root) == INT_MAX) return false;
//         else return true;
//     }
// };