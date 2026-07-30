class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        const n = s.length;

        let ans = 0;
        const expand = (l, r) => {
            while(l >= 0 && r < n && s[l] == s[r]) {
                ans++;
                l--, r++;
            }
        }

        for(let i = 0; i < n; ++i) {
            expand(i, i);
            expand(i, i + 1);
        }

        return ans;
    }
}
