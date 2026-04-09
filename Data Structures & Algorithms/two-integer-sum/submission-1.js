class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        const vi = new Map();

        for(let i = 0; i < n; ++i) {
            const rem = target - nums[i];
            if(vi.has(rem)) return [vi.get(rem), i]; 
            vi.set(nums[i], i);
        }

        return [-1, -1];
    }
}
