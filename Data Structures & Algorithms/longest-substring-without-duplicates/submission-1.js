class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const hash = new Array(256).fill(-1);
        let l = 0, ans = 0, n = s.length;
        for(let r = 0; r < n; ++r) {
            if(hash[s[r]] >= l) l = hash[s[r]] + 1;

            hash[s[r]] = r;
            ans = Math.max(ans, r - l + 1);
        }
        return ans;
    }
}
