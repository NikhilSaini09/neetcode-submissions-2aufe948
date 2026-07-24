class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let a: number = 1, b: number = 1;

        for(let i = 1; i < n; ++i) {
            const temp: number = b;
            b = a + b;
            a = temp;
        }

        return b;
    }
}
