class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        nums.sort((a, b) => a - b);

        const ans = [];
        for(let i = 0; i < n; ++i) {
            if(i > 0 && nums[i] == nums[i - 1]) continue;

            let j = i + 1, k = n - 1;
            const target = nums[i];

            while(j < k) {
                const total = -(nums[j] + nums[k]);

                if(total == target) {
                    ans.push([nums[i], nums[j], nums[k]]);
                    ++j;
                    while(j < k && nums[j] == nums[j - 1]) ++j;
                    --k;
                    while(j < k && nums[k] == nums[k + 1]) --k;
                } else if(total < target) {
                    --k;
                    while(j < k && nums[k] == nums[k + 1]) --k;
                } else {
                    ++j;
                    while(j < k && nums[j] == nums[j - 1]) ++j;
                }
            }
        }

        return ans;
    }
}
