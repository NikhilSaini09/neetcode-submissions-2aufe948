class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        const total: number = nums.reduce((acc: number, val: number): number => acc + val, 0);
        if(total & 1) return false;
        const target: number = total >> 1;
        
        let dp: bigint = 1n;
        for(const num of nums) {
            dp |= dp << BigInt(num);
        }
        
        return ((dp >> BigInt(target)) & 1n) === 1n;
    }
}
