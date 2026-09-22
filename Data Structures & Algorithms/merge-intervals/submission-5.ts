class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b) => a[0] - b[0]);
        const ans: number[][] = [];
        for(const [st, ed] of intervals) {
            if(ans.length === 0 || ans.at(-1)[1] < st) ans.push([st, ed]);
            else ans[ans.length - 1][1] = Math.max(ans.at(-1)[1], ed);
        }
        return ans;
    }
}
