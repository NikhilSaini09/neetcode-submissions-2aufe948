class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const n = s.length;
        const dp = new Array(n).fill(-1);

        const match = (w, i, j) => {
            for(let k = 0; k < j; ++k) {
                if(s[i + k] != w[k]) return false;
            }
            return true;
        }
        const dfs = (i) => {
            if(i == n) return true;
            if(dp[i] != -1) return dp[i];

            for(const w of wordDict) {
                const j = w.length;
                if(i + j <= n && match(w, i, j)) {
                    if(dfs(i + j)) return dp[i] = true;
                }
            }
            return dp[i] = false;
        }

        return dfs(0);
    }
}
