class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n: number = nums.length;
        let a: number = 0, b: number = 0;

        for(let i = 0; i < n; ++i) {
            const temp: number = Math.max(a + nums[i], b);
            a = b;
            b = temp;
        }

        return b;
    }
}
