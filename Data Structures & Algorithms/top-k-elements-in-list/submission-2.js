class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const n = nums.length;
        const ans = [];

        const freqMap = new Map();
        for(const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        const buckets = Array.from({ length: n + 1 }, () => []);

        for(const [num, count] of freqMap) buckets[count].push(num);

        for(let i = n; i >= 0; --i) {
            if(buckets[i].length > 0) {
                for(const num of buckets[i]) {
                    ans.push(num);
                    if(ans.length === k) return ans;
                }
            }
        }

        return ans;
    }
}
