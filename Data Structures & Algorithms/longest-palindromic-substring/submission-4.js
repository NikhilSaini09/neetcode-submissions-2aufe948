class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        const n = s.length;
        if(n < 2) return s;

        let st = 0, len = 1;
        const expand = (l, r) => {
            while(l >= 0 && r < n && s[l] == s[r]) {
                if(r - l + 1 > len) {
                    st = l;
                    len = r - l + 1;
                }
                l--, r++;
            }
        }

        for(let i = 0; i < n; ++i) {
            expand(i, i);
            expand(i, i + 1);
        }

        return s.substring(st, st + len);
    }
}
