class Solution {
    public int maxProduct(int[] nums) {
        int n = nums.length, pre = 1, suf = 1, ans = Integer.MIN_VALUE;
        for(int i = 0; i < n; ++i) {
            pre *= nums[i];
            suf *= nums[n - i - 1];

            ans = Math.max(ans, Math.max(pre, suf));
            if(pre == 0) pre = 1;
            if(suf == 0) suf = 1;
        }
        return ans;
    }
}
