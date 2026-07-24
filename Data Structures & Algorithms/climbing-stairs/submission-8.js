class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let a = 1, b = 1;

        for(let i = 1; i < n; ++i) {
            const temp = b;
            b = a + b;
            a = temp;
        }

        return b;
    }
}
