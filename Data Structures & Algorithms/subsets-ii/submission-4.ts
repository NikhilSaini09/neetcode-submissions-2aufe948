class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        const sol: number[][] = [];

        const allSubsets = (ind: number, temp: number[]): void => {
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
