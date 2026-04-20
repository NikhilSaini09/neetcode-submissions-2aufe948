class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const m = s1.length, n = s2.length;
        if(m > n) return false; 
        const hash = new Int32Array(26);

        for (let i = 0; i < m; i++) {
            hash[s1.charCodeAt(i) - 97]++;
        }

        let l = 0, r = 0;
        while(r < n) {
            const idx = s2.charCodeAt(r) - 97;
            if(hash[idx] > 0) {
                --hash[idx];
            } else {
                if(l < r) while(s2[r] != s2[l]) {++hash[s2.charCodeAt(l) - 97]; ++l;}
                ++l;
            }
            
            if(r - l + 1 == m) return true;
            ++r;
        }

        return false;
    }
}
