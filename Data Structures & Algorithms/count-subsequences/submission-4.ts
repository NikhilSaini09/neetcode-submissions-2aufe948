class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        const n: number = s.length;
        const m: number = t.length;
        const dp: Int32Array = new Int32Array(m + 1);
        dp[0] = 1;
        for(let i = 1; i <= n; ++i) {
            for(let j = Math.min(i, m); j >= 1; --j) {
                if(s[i - 1] === t[j - 1]) dp[j] += dp[j - 1];
            }
        }
        return dp[m];
    }
}
