class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const counts = {};

        for (let i = 0; i < s.length; i++) {
            counts[s[i]] = (counts[s[i]] || 0) + 1;
            counts[t[i]] = (counts[t[i]] || 0) - 1;
        }

        for (let char in counts) {
            if (counts[char] !== 0) return false;
        }

        return true;



        // if (s.length !== t.length) return false;

        // const hash = new Int32Array(26);

        // for (let i = 0; i < s.length; i++) {
        //     hash[s.charCodeAt(i) - 97]++;
        // }
        // for (let i = 0; i < t.length; i++) {
        //     hash[s.charCodeAt(i) - 97]--;
        // }
        
        // for (let count of hash) {
        //     if (count !== 0) return false;
        // }

        // return true;
    }
}
