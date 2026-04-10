class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let ans = strs.length + '#';
        for(const s of strs) {
            ans += s.length + '#' + s;
        }
        return ans;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const ans = [];
        let i = 0;
        let j = str.indexOf('#', i);
        const numStrings = parseInt(str.substring(i, j));

        i = j + 1;
        while(i < str.length) {
            j = str.indexOf('#', i);
            const len = parseInt(str.substring(i, j));
            
            i = j + 1;
            ans.push(str.substring(i, i + len));
            i += len;
        }
        return ans;
    }
}
