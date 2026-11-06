class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let cur = 0, ans = 0;
        for(const n of nums) {
            if(n == 1) cur++;
            else {
                ans = Math.max(ans, cur);
                cur = 0;
            }
        }
        return Math.max(ans, cur);
    }
}
