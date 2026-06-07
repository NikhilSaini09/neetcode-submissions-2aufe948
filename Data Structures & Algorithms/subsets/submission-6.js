class Solution {
    constructor() {
        this.answer = [];
    }

    /**
     * @param {number[]} start
     * @param {number[]} nums
     * @param {number[]} path
     */
    #backtrack(start, nums, path) {
        this.answer.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            this.#backtrack(i + 1, nums, path);
            path.pop(); 
        }
    }

    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        this.answer = [];
        const path = [];
        this.#backtrack(0, nums, path);
        return this.answer;
    }
}
