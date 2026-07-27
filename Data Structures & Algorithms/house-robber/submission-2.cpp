class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        int with = nums[0], without = 0;

        for(int i = 1; i < n; ++i) {
            int temp = max(with, without);
            with = without + nums[i];
            without = temp;
        }

        return max(with, without);
    }
};
