class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        let a = 0, b = 0;

        for(let i = 0; i < n; ++i) {
            const temp = Math.max(a + nums[i], b);
            a = b;
            b = temp;
        }

        return b;
    }
}
