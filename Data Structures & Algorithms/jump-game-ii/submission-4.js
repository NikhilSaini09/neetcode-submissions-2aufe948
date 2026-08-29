class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let ans = 0, far = 0, end = 0;
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
