class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let mini = 0;
        let maxi = 0;
        for(const c of s) {
            if(c === '(') mini++, maxi++;
            else if(c === ')') mini--, maxi--;
            else mini--, maxi++;

            if(maxi < 0) return false;
            if(mini < 0) mini = 0;
        }
        return mini == 0;
    }
}
