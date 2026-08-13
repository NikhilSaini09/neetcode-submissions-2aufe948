class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((acc, val) => acc + val, 0);
        if(total & 1) return false;
        const target = total >> 1;
        
        let dp = 1n;
        for(const num of nums) {
            dp |= dp << BigInt(num);
        }
        
        return ((dp >> BigInt(target)) & 1n) === 1n;
    }
}
