class Solution {
public:
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        sort(candidates.begin(), candidates.end());
        vector<int> temp;
        vector<vector<int>> collection;
        generateCollection(candidates, target, 0, temp, collection);
        return collection;
    }
private:
    void generateCollection(vector<int> &arr, int target, int ind, vector<int> &comb, vector<vector<int>> &res) {
        if(target == 0) {
            res.push_back(comb);
            return;
        }

        for(int i=ind; i<arr.size(); ++i) {
            if(ind < i && arr[i] == arr[i-1]) continue;

            if(arr[i] > target) break;

            comb.push_back(arr[i]);
            generateCollection(arr, target - arr[i], i + 1, comb, res);
            comb.pop_back();
        }
    }
};
