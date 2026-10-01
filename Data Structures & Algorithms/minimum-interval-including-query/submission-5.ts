class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} queries
     * @return {number[]}
     */
    minInterval(intervals: number[][], queries: number[]): number[] {
        const n = intervals.length;
        const m = queries.length;

        intervals.sort((a, b) => a[0] - b[0]);
        const idx = Array.from({ length: m }, (_, i) => i).sort((a, b) => queries[a] - queries[b]);

        const ans: number[] = new Array(m).fill(-1);
        let i = 0;

        const pq: typeof MinPriorityQueue = new MinPriorityQueue(a => a[0]);
        for(const qidx of idx) {
            const j = queries[qidx];

            while(i < n && intervals[i][0] <= j) {
                const [l, r] = intervals[i];
                pq.enqueue([r - l + 1, r]);
                i++;
            }
            while(!pq.isEmpty() && pq.front()[1] < j) {
                pq.dequeue();
            }

            if(!pq.isEmpty()) ans[qidx] = pq.front()[0];
        }

        return ans;
    }
}
