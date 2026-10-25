class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let xr = 0;
        for(const n of nums) xr ^= n;
        return xr;
    }
}
