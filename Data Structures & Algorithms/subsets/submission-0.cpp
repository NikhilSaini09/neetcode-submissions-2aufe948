class Solution {
    void dfs(vector<vector<int>> &ans, vector<int> &temp, vector<int> &nums, int n, int i) {
        if(i == n) {
            ans.push_back(temp);
            return;
        }

        dfs(ans, temp, nums, n, i + 1);
        temp.push_back(nums[i]);
        dfs(ans, temp, nums, n, i + 1);
        temp.pop_back();
    }
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<vector<int>> ans;
        vector<int> temp;
        dfs(ans, temp, nums, nums.size(), 0);
        return ans;
    }
};
