class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S: string): number[] {
        const n = S.length;
        const last = new Int32Array(26);
        const acode = 97;
        for(let i = 0; i < n; ++i) {
            last[S.charCodeAt(i) - acode] = i;
        }

        const ans: number[] = [];
        let st = 0, ed = 0;
        for(let i = 0; i < n; ++i) {
            ed = Math.max(ed, last[S.charCodeAt(i) - acode]);
            if(i == ed) {
                ans.push(ed - st + 1);
                st = i + 1;
            }
        }
        return ans;
    }
}
