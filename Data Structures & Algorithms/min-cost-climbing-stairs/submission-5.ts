class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        const n: number = cost.length;
        let a: number = 0;
        let b: number = 0;

        for(let i = 2; i <= n; ++i) {
            const next: number = Math.min(a + cost[i - 2], b + cost[i - 1]);
            a = b;
            b = next;
        }

        return b;
    }
}
