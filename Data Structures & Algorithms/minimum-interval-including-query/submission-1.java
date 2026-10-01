class Solution {
    public int[] minInterval(int[][] intervals, int[] queries) {
        int n = intervals.length;
        int m = queries.length;
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        int[][] qidx = new int[m][2];
        for(int i = 0; i < m; ++i) {
            qidx[i][0] = queries[i];
            qidx[i][1] = i;
        }
        Arrays.sort(qidx, (a, b) -> a[0] - b[0]);

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int[] ans = new int[m];
        int i = 0;
        for(int[] j : qidx) {
            int q = j[0];
            int qi = j[1];

            while(i < n && intervals[i][0] <= q) {
                int l = intervals[i][0];
                int r = intervals[i][1];
                pq.add(new int[]{r - l + 1, r});
                i++;
            }
            while(!pq.isEmpty() && pq.peek()[1] < q) {
                pq.poll();
            }

            ans[qi] = pq.isEmpty() ? -1 : pq.peek()[0];
        }
        return ans;
    }
}
