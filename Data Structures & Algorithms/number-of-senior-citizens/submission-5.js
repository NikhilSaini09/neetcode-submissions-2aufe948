class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ans = 0;
        for(const s of details) {
            if(parseInt(s.slice(11, 13)) > 60) ++ans;
        }
        return ans;
    }
}
