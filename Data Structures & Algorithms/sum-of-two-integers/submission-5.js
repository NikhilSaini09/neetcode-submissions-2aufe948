class Solution {
    /**
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    getSum(a, b) {
        while(b !== 0) {
            const t = (a & b) << 1;
            a ^= b;
            b = t;
        }
        return a;
    }
}
