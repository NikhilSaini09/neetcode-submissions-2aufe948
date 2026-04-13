class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const n = s.length;
        let i = 0, j = n - 1;
        const isAln = (char) => {
            return /[A-Za-z0-9]/.test(char);
        };

        while(true) {
            while(i < n && i < j && !isAln(s[i])) ++i;
            while(j >= 0 && i < j && !isAln(s[j])) --j;

            if(i >= j) break;
            if(s[i++].toLowerCase() !== s[j--].toLowerCase()) return false;
        }

        return true;
    }
}
