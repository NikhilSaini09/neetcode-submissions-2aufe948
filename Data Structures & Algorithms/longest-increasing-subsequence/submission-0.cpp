class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int n = nums.size();
        vector<int> lis{nums[0]};
        for(int i = 1; i < n; ++i) {
            if(lis.back() < nums[i]) lis.push_back(nums[i]);
            else if(lis.back() > nums[i]) {
                auto it = ranges::lower_bound(lis, nums[i]);
                *it = nums[i];
            }
        }
        return lis.size();
    }
};
