class Solution {
    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        if(n < 2) return 0;

        int[] minDist = new int[n];
        Arrays.fill(minDist, Integer.MAX_VALUE);
        boolean[] inMST = new boolean[n];

        minDist[0] = 0;
        int sum = 0, cur = 0;
        for(int i = 0; i < n - 1; ++i) {
            inMST[cur] = true;
            int nnode = -1, medge = Integer.MAX_VALUE;

            int x1 = points[cur][0], y1 = points[cur][1];
            for(int j = 0; j < n; ++j) {
                if(inMST[j]) continue;

                int d = Math.abs(x1 - points[j][0]) + Math.abs(y1 - points[j][1]);
                if(d < minDist[j]) minDist[j] = d;

                if(minDist[j] < medge) {
                    medge = minDist[j];
                    nnode = j;
                }
            }

            sum += medge;
            cur = nnode;
        }

        return sum;
    }
}
