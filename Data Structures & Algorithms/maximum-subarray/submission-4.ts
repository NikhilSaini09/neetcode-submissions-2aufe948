class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let ans: number = -Infinity, cur: number = 0;
        for(const n of nums) {
            cur = Math.max(n, cur + n);
            ans = Math.max(ans, cur);
        }
        return ans;
    }
}
