class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // int n = nums.size();
        // vector<int> ans(n, 0);
        // ans[0] = 1;
        // for(int i = 1; i < n; ++i) {
        //     ans[i] = ans[i - 1] * nums[i - 1];
        // }

        // for(int i = n - 2, pdt = 1; i >= 0; --i) {
        //     pdt *= nums[i + 1];
        //     ans[i] = ans[i] * pdt;
        // }

        // return ans;



        vector<int> output(nums.size(), 1);

        int left = 1;
        for (int i = 0; i < nums.size(); i++) {
            output[i] *= left;
            left *= nums[i];
        }

        int right = 1;
        for (int i = nums.size() - 1; i >= 0; i--) {
            output[i] *= right;
            right *= nums[i];
        }

        return output;
    }
};
