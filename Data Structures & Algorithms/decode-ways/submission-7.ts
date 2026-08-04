class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        if(s[0] == '0') return 0;
        let si: number = 1, d: number = 1;
        for(let i = 1; i < s.length; ++i) {
            let cur: number = 0;
            if(s[i] != '0') cur += si;
            if(s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6')) cur += d;
            d = si;
            si = cur;
        }
        return si;
    }
}
