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
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
        for(int i=0; i<inorder.size(); ++i) {
            inMap[inorder[i]] = i;
        }

        return dfs(preorder, 0, inorder.size() - 1);
    }
private:
    unordered_map<int, int> inMap;
    int pInd = 0;

    TreeNode* dfs(vector<int>& preorder, int start, int end) {
        if(start > end) return nullptr;

        TreeNode* cur = new TreeNode(preorder[pInd++]);
        int mid = inMap[cur->val];

        cur->left = dfs(preorder, start, mid - 1);
        cur->right = dfs(preorder, mid + 1, end);

        return cur;
    }
};
