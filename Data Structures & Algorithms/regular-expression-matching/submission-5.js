class Solution {
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */
    isMatch(s, p) {
        const n = s.length, m = p.length;
        let dp = new Array(m + 1).fill(false);
        dp[0] = true;
        for(let j = 1; j <= m; ++j) {
            if(p[j - 1] === '*') dp[j] = dp[j - 2];
        }
        
        for(let i = 1; i <= n; ++i) {
            let next = new Array(m + 1).fill(false);
            for(let j = 1; j <= m; ++j) {
                if(p[j - 1] === '.' || s[i - 1] === p[j - 1]) {
                    next[j] = dp[j - 1];
                } else if(p[j - 1] === '*') {
                    next[j] = next[j - 2];
                    if(p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                        next[j] = next[j] || dp[j];
                    }
                }
            }
            dp = next;
        }
        
        return dp[m];
    }
}
