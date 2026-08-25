class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let ans = -Infinity, cur = 0;
        for(const n of nums) {
            cur = Math.max(n, cur + n);
            ans = Math.max(ans, cur);
        }
        return ans;
    }
}
