class Solution {
public:
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<vector<int>> sol;
        vector<int> temp;
        allSubsets(nums, 0, temp, sol);
        return sol;
    }
private:
    void allSubsets(vector<int> &arr, int ind, vector<int> &subset, vector<vector<int>> &res) {
        res.push_back(subset);

        for(int i=ind; i<arr.size(); ++i) {
            if(ind < i && arr[i] == arr[i-1]) continue;

            subset.push_back(arr[i]);
            allSubsets(arr, i + 1, subset, res);
            subset.pop_back();
        }
    }
};
