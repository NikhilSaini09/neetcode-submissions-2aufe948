class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        let ans: number = 0, far: number = 0, end: number = 0;
        for(let i = 0; i < nums.length - 1; ++i) {
            far = Math.max(far, nums[i] + i);
            if(i == end) {
                ans++;
                end = far;
            }
        }
        return ans;
    }
}
