class Solution {
    public int maxSubArray(int[] nums) {
        int ans = Integer.MIN_VALUE, cur = 0;
        for(int n : nums) {
            cur = Math.max(n, cur + n);
            ans = Math.max(ans, cur);
        }
        return ans;
    }
}
