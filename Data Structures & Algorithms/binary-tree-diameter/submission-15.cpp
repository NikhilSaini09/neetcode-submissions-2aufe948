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

// class Solution {
// private:
//     int dfs(TreeNode *root, int &dia) {
//         if(!root) return 0;

//         int lh = dfs(root->left, dia);
//         int rh = dfs(root->right, dia);

//         dia = max(lh + rh, dia);
//         return (max(lh, rh) + 1);
//     }
// public:
//     int diameterOfBinaryTree(TreeNode* root) {
//         int dia = 0;
//         dfs(root, dia);
//         return dia;
//     }
// };



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

    int height(TreeNode* root) {
        if(root==NULL) return 0;

        int leftheight=height(root->left);
        int rightheight=height(root->right);

        return 1+max(leftheight,rightheight);
        
    }
    int diameterOfBinaryTree(TreeNode* root) {

        if(root==NULL) return 0;

        int leftDiameter=diameterOfBinaryTree(root->left);
        int rightDiameter=diameterOfBinaryTree(root->right);
        int current=height(root->left)+height(root->right); //dia through node(leftH+rightH)

        return max(current,max(leftDiameter,rightDiameter));
        
    }
};
