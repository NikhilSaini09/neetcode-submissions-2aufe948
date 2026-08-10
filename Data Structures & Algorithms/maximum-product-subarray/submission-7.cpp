class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int ans = INT_MIN, pre = 1, suf = 1, n = nums.size();
        for(int i = 0; i < n; ++i) {
            pre *= nums[i];
            suf *= nums[n - i - 1];

            ans = max({ans, pre, suf});
            if(pre == 0) pre = 1;
            if(suf == 0) suf = 1;
        }
        return ans;
    }
};


// class Solution {
// public:
//     int maxProduct(vector<int>& nums) {
//         int n = nums.size();
//         int mini=1, maxi=1, ans=INT_MIN;

//         for(int i=0; i<n; i++)
//         {
//             if(nums[i]<0){
//                 swap(mini, maxi);
//             }

//             maxi = max(nums[i], maxi*nums[i]);
//             mini = min(nums[i], mini*nums[i]);
//             ans=max(ans, maxi);
//         }

//         return ans;
//     }
// };
