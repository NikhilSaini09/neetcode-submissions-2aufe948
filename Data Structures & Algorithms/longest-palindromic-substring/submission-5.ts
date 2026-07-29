class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        const n: number = s.length;
        if(n < 2) return s;

        let st: number = 0, len: number = 1;
        const expand = (l: number, r: number): void => {
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

        return s.slice(st, st + len);
    }
}
