class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const ans: number[][] = [];

        function backtrack(path: number[], idx: number): void {
            ans.push([...path]);

            for(let i = idx; i < nums.length; ++i) {
                path.push(nums[i]);
                backtrack(path, i + 1);
                path.pop();
            }
        }

        backtrack([], 0);
        return ans;
    }
}
