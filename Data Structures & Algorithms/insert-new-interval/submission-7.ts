class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals: number[][], newInterval: number[]): number[][] {
        const n = intervals.length;
        const ans: number[][] = [];
        let i = 0;

        while(i < n && intervals[i][1] < newInterval[0]) {
            ans.push(intervals[i]);
            i++;
        }

        while(i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }
        ans.push(newInterval);

        while(i < n) {
            ans.push(intervals[i]);
            i++;
        }

        return ans;
    }
}
