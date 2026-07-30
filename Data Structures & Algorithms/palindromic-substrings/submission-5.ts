class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        const n: number = s.length;

        let ans: number = 0;
        const expand = (l: number, r: number): void => {
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
