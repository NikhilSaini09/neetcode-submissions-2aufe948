class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let pre = 1, suf = 1, ans = -Infinity;

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
