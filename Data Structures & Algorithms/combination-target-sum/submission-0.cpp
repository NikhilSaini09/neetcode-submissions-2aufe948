class Solution {
public:
    vector<vector<int>> combinationSum(vector<int>& nums, int target) {
        vector<int> temp;
        vector<vector<int>> ans;
        generateCombination(nums, target, 0, temp, ans);
        return ans;
    }
private:
    void generateCombination(vector<int> &arr, int target, int ind, vector<int> &comb, vector<vector<int>> &sol) {
        if(target == 0) {
            sol.push_back(comb);
            return;
        }
        if(target < 0 || ind == arr.size()) return;

        comb.push_back(arr[ind]);
        generateCombination(arr, target - arr[ind], ind, comb, sol);
        comb.pop_back();

        generateCombination(arr, target, ind+1, comb, sol);
    }
};
