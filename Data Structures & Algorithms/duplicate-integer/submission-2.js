class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const sn = new Set();

        for(const n of nums) {
            if(sn.has(n)) return true;

            sn.add(n);
        }

        return false;
    }
}
