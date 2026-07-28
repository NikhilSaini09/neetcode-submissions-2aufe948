class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n: number = nums.length;
        if(n == 1) return nums[0];
        if(n == 2) return Math.max(nums[0], nums[1]);

        const h = (l: number, r: number): number => {
            let a: number = 0, b: number = 0;
            for(let i = l; i < r; ++i) {
                const temp: number = Math.max(a + nums[i], b);
                a = b;
                b = temp;
            }
            return b;
        }

        return Math.max(h(0, n - 1), h(1, n));
    }
}
