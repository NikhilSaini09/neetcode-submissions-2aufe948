class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = {};

        for(const s of strs) {
            const key = s.split('').sort().join('');
            if(!groups[key]) groups[key] = [];
            groups[key].push(s);
        }

        return Object.values(groups);


        // const ans = [];
        // let i = 0;
        // const imap = new Map();
        // for(const s of strs) {
        //     const temp = s.split('').sort().join('');

        //     if(imap.has(temp)) ans[imap.get(temp)].push(s);
        //     else {
        //         imap.set(temp, i++);
        //         ans.push([s]);
        //     }
        // }

        // return ans;
    }
}
