class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        const n = word1.length;
        const m = word2.length;
        const dp = Array.from({ length: m + 1}, (_, i) => i);

        for(let i = 1; i <= n; ++i) {
            let prev = dp[0];
            dp[0] = i;
            for(let j = 1; j <= m; ++j) {
                const temp = dp[j];
                if(word1[i - 1] === word2[j - 1]) dp[j] = prev;
                else dp[j] = 1 + Math.min(prev, dp[j - 1], dp[j]);
                prev = temp;
            }
        }

        return dp[m];
    }
}
