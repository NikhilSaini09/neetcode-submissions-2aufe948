class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        intervals.sort((a, b) => a[1] - b[1]);
        let ans = 0;
        let last = -Infinity;
        for(const [st, ed] of intervals) {
            if(st >= last) last = ed;
            else ++ans;
        }
        return ans;
    }
}
