class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const n = s.length;
        let l = 0, freq = 0, ans = 0;
        const hash = new Int32Array(26);
        for(let r = 0; r < n; ++r) {
            const idx = s.charCodeAt(r) - 65;
            hash[idx]++;
            freq = Math.max(freq, hash[idx]);

            if(r - l + 1 > k + freq) {
                hash[s.charCodeAt(l) - 65]--;
                l++;
            }

            ans = r - l + 1;
        }

        return ans;
    }
}
