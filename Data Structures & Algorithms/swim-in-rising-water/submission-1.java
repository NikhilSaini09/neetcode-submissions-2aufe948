class Solution {
    public int swimInWater(int[][] grid) {
        int n = grid.length;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        pq.add(new int[]{grid[0][0], 0, 0});
        grid[0][0] = -1;

        int[] dirs = {-1, 0, 1, 0, -1};
        int ans = 0;
        while(!pq.isEmpty()) {
            int[] cur = pq.poll();

            ans = Math.max(ans, cur[0]);
            if(cur[1] == n - 1 && cur[2] == n - 1) return ans;

            for(int i = 0; i < 4; ++i) {
                int r = cur[1] + dirs[i];
                int c = cur[2] + dirs[i + 1];

                if(r >= 0 && r < n && c >= 0 && c < n && grid[r][c] != -1) {
                    pq.add(new int[]{grid[r][c], r, c});
                    grid[r][c] = -1;
                }
            }
        }
        return -1;
    }
}
