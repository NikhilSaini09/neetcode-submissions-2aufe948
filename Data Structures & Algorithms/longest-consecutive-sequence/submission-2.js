class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let ans = 0;
        const s = new Set(nums);

        for(const n of s) {
            if(!s.has(n - 1)) {
                let cur = n + 1;
                while(s.has(cur)) ++cur;

                ans = Math.max(ans, cur - n);
            }
        }

        return ans;
    }
}
