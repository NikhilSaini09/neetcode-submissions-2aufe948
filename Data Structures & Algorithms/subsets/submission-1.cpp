// class Solution {
//     void dfs(vector<vector<int>> &ans, vector<int> &temp, vector<int> &nums, int n, int i) {
//         if(i == n) {
//             ans.push_back(temp);
//             return;
//         }

//         dfs(ans, temp, nums, n, i + 1);
//         temp.push_back(nums[i]);
//         dfs(ans, temp, nums, n, i + 1);
//         temp.pop_back();
//     }
// public:
//     vector<vector<int>> subsets(vector<int>& nums) {
//         vector<vector<int>> ans;
//         vector<int> temp;
//         dfs(ans, temp, nums, nums.size(), 0);
//         return ans;
//     }
// };



class Solution {
public:
    vector<vector<int>> answer;
    void backtrack(int start, vector<int>& nums, vector<int>& path){
        answer.push_back(path);

        for(int i = start; i < nums.size(); ++i){
            path.push_back(nums[i]);
            backtrack(i + 1, nums, path);
            path.pop_back();
        }
    }
    vector<vector<int>> subsets(vector<int>& nums) {
        vector<int> path;
        backtrack(0, nums, path);
        return answer;
    }
};