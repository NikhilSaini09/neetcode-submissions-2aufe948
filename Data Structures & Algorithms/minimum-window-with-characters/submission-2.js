class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const n = s.length;
        let m = t.length;
        if(m > n) return "";

        const hash = new Int32Array(256);
        for(let i = 0; i < m; ++i) hash[t.charCodeAt(i)]++;
    
        let l = 0, st = -1, minLen = Infinity;
        for(let r = 0; r < n; ++r) {
            if(hash[s.charCodeAt(r)]-- > 0) --m;
            
            while(m === 0) {
                const curLen = r - l + 1;
                if(curLen < minLen) {
                    st = l; 
                    minLen = curLen;
                }

                if(++hash[s.charCodeAt(l++)] > 0) ++m;
            }
        }

        return st === -1 ? "" : s.substring(st, st + minLen);
    }
}
