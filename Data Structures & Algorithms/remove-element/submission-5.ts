class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let ans = 0;
        for(let i = 0; i < nums.length; ++i) {
            if(nums[i] != val) nums[ans++] = nums[i];
        }
        return ans;
    }
}
