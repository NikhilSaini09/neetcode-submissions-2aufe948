class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let xr: number = 0;
        for(const n of nums) xr ^= n;
        return xr;
    }
}
