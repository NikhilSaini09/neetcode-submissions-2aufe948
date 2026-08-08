class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        const n: number = nums.length;
        let pre: number = 1, suf: number = 1, ans: number = -Infinity;

        for(let i = 0; i < n; ++i) {
            pre *= nums[i];
            suf *= nums[n - i - 1];

            ans = Math.max(ans, pre, suf);
            if(pre == 0) pre = 1;
            if(suf == 0) suf = 1;
        }

        return ans + 0;
    }
}
