class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        const m = t.length;
        let j = 0;
        for(const a of s) {
            if(t[j] == a) {
                ++j;
                if(j == m) return 0;
            }
        }
        return m - j;
    }
}
