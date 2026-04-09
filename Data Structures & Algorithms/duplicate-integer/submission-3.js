class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;

        // const sn = new Set();

        // for(const n of nums) {
        //     if(sn.has(n)) return true;

        //     sn.add(n);
        // }

        // return false;
    }
}
