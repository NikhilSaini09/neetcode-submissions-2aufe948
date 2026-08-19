class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const m: number = s1.length, n: number = s2.length, l: number = s3.length;
        if(m + n != l) return false;
        if(m < n) return this.isInterleave(s2, s1, s3);

        const dp: boolean[] = new Array(n + 1).fill(false);
        dp[0] = true;
        for(let j = 1; j <= n; ++j) dp[j] = dp[j - 1] && s2[j - 1] == s3[j - 1];

        for(let i = 1; i <= m; ++i) {
            dp[0] = dp[0] && s1[i - 1] == s3[i - 1];
            for(let j = 1; j <= n; ++j) {
                const ch: string = s3[i + j - 1];
                dp[j] = (dp[j] && s1[i - 1] == ch) || (dp[j - 1] && s2[j - 1] == ch);
            }
        }
        return dp[n];
    }
}
