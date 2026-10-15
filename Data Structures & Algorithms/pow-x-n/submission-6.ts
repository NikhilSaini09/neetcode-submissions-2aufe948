class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x: number, n: number): number {
        let N = Math.abs(n);
        // if(N < 0) N = -N;
        let ans = 1.0;
        while(N > 0) {
            if(N & 1) ans *= x;
            x *= x;
            N >>>= 1;
        }
        return n >= 0 ? ans : 1 / ans;
    }
}
