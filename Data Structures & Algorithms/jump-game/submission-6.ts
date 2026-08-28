class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums: number[]): boolean {
        let far: number = 0;
        for(let i = 0; i < nums.length; ++i) {
            if(far < i) return false;
            far = Math.max(far, nums[i] + i);
        }
        return true;
    }
}
