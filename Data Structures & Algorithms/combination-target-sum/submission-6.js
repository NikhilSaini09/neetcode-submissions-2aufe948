class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const ans = [];
        const temp = [];

        function generate_combination(rem, ind) {
            if(rem == 0) {
                ans.push([...temp]);
                return;
            }
            
            if(rem < 0 || ind == nums.length) {
                return;
            }
            
            temp.push(nums[ind]);
            generate_combination(rem - nums[ind], ind);
            temp.pop();

            generate_combination(rem, ind + 1);
        }
        
        generate_combination(target, 0);
        return ans;
    }
}
