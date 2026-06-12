class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const sol = [];

        const allSubsets = (ind, temp) => {
            sol.push([...temp]);

            for(let i = ind; i < nums.length; ++i) {
                if(ind < i && nums[i] === nums[i - 1]) continue;

                temp.push(nums[i]);
                allSubsets(i + 1, temp);
                temp.pop();
            }
        }

        allSubsets(0, []);
        return sol;
    }
}
