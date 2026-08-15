class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const n: number = text1.length, m: number = text2.length;
        let dp: number[] = new Array(m + 1).fill(0), cur: number[] = new Array(m + 1).fill(0);

        for(let i = 1; i <= n; ++i) {
            for(let j = 1; j <= m; ++j) {
                if(text1[i - 1] === text2[j - 1]) cur[j] = dp[j - 1] + 1;
                else cur[j] = Math.max(dp[j], cur[j - 1]);
            }
            [dp, cur] = [cur, dp];
        }

        return dp[m];
    }
}
