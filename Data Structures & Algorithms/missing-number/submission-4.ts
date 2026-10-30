class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let xr = 0;
        let xa = 0;
        for(let i = 0; i < nums.length; ++i) {
            xr ^= nums[i];
            xa ^= (i + 1);
        }
        return xr ^ xa;
    }
}
