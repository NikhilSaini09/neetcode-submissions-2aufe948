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
    int maxPathSum(TreeNode* root) {
        int maxPS = INT_MIN;
        helper(root, maxPS);

        return maxPS;
    }
private:
    int helper(TreeNode *root, int &maxPS) {
        if(!root) return 0;

        int leftMax = max(0, helper(root->left, maxPS));
        int rightMax = max(0, helper(root->right, maxPS));

        maxPS = max(maxPS, leftMax + rightMax + root->val);

        return (max(leftMax, rightMax) + root->val);
    }
};
