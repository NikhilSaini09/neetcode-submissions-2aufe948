class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if(s[0] == '0') return 0;
        let si = 1, d = 1;
        for(let i = 1; i < s.length; ++i) {
            let cur = 0;
            if(s[i] != '0') cur += si;
            if(s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6')) cur += d;
            d = si;
            si = cur;
        }
        return si;
    }
}
