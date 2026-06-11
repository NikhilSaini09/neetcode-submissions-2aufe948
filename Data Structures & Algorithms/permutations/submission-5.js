class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        const backtrack = (start) => {
            if(start === nums.length) {
                res.push([...nums]);
                return;
            }

            for(let i = start; i < nums.length; i++) {
                [nums[start], nums[i]] = [nums[i], nums[start]];
                backtrack(start + 1);
                [nums[start], nums[i]] = [nums[i], nums[start]];
            }
        };

        backtrack(0);
        return res;
    }
}
