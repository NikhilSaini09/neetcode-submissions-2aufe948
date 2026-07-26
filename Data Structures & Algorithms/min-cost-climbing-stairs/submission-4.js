class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length;
        let a = 0;
        let b = 0;

        for(let i = 2; i <= n; ++i) {
            const next = Math.min(a + cost[i - 2], b + cost[i - 1]);
            a = b;
            b = next;
        }

        return b;
    }
}
