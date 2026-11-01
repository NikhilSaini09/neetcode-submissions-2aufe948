class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a: number, b: number): number {
        while(b !== 0) {
            const t = (a & b) << 1;
            a ^= b;
            b = t;
        }
        return a;
    }
}
