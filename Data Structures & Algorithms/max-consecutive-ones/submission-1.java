class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int cur = 0, ans = 0;
        for(int n : nums) {
            if(n == 1) cur++;
            else {
                ans = Math.max(ans, cur);
                cur = 0;
            }
        }
        ans = Math.max(ans, cur);
        return ans;
    }
}