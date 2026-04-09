class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = [];
        let i = 0;
        const imap = new Map();
        for(const s of strs) {
            const temp = s.split('').sort().join('');

            if(imap.has(temp)) ans[imap.get(temp)].push(s);
            else {
                imap.set(temp, i++);
                ans.push([s]);
            }
        }

        return ans;
    }
}
