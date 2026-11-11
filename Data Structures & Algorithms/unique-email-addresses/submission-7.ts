class Solution {
    /**
     * @param {string[]} emails
     * @return {number}
     */
    numUniqueEmails(emails: string[]): number {
        const ans: Set<string> = new Set();
        for(const e of emails) {
            let i = 0, s = '';
            while(i < e.length && e[i] !== '@' && e[i] !== '+') {
                if(e[i] !== '.') s += e[i];
                i++;
            }
            while(i < e.length && e[i] !== '@') i++;
            ans.add(s + e.slice(i));
        }
        return ans.size;
    }
}
