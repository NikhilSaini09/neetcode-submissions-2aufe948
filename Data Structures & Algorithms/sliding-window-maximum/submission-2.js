class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const ans = [];
        const dq = [];

        for(let i = 0; i < n; ++i) {
            if(dq.length > 0 && dq[0] == i - k) dq.shift();
            while(dq.length > 0 && nums[dq[dq.length - 1]] <= nums[i]) dq.pop();

            dq.push(i);
            if(i >= k - 1) ans.push(nums[dq[0]]);
        }

        return ans;
    }
}
