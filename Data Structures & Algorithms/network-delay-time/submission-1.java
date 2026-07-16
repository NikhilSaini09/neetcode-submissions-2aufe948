class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        final int INF = 10_000_000;

        List<List<int[]>> adj = new ArrayList<>();
        for(int i = 0; i < n; ++i) adj.add(new ArrayList<>());

        for(int[] t : times) {
            adj.get(t[0] - 1).add(new int[]{t[1] - 1, t[2]});
        }

        int[] dist = new int[n];
        Arrays.fill(dist, INF);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        pq.add(new int[]{0, k - 1});
        dist[k - 1] = 0;

        while(!pq.isEmpty()) {
            int[] cur = pq.poll();

            if(cur[0] > dist[cur[1]]) continue;

            for(int[] edge : adj.get(cur[1])) {
                if(dist[edge[0]] > cur[0] + edge[1]) {
                    dist[edge[0]] = cur[0] + edge[1];
                    pq.add(new int[]{dist[edge[0]], edge[0]});
                }
            }
        }

        int ans = 0;
        for(int i = 0; i < n; ++i) {
            if(dist[i] == INF) return -1;
            ans = Math.max(ans, dist[i]);
        }
        return ans;
    }
}
