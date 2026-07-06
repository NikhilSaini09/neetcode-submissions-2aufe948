class Solution {
    public int orangesRotting(int[][] grid) {
        int m = grid.length, n = grid[0].length;

        Queue<int[]> q = new LinkedList<>();
        int fresh = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(grid[i][j] == 2) {
                    grid[i][j] = 0;
                    q.offer(new int[]{i, j});
                } else if(grid[i][j] == 1) fresh++;
            }
        }

        if(fresh == 0) return 0;

        int ans = -1;
        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1}};
        while(!q.isEmpty()) {
            ++ans;
            int qz = q.size();
            for(int i = 0; i < qz; ++i) {
                int[] cur = q.poll();

                for(int j = 0; j < 4; ++j) {
                    int r = cur[0] + dirs[j][0];
                    int c = cur[1] + dirs[j][1];

                    if(r >= 0 && r < m && c >= 0 && c < n && grid[r][c] != 0) {
                        grid[r][c] = 0;
                        q.offer(new int[]{r, c});
                        fresh--;
                    }
                }
            }
        }

        return (fresh == 0) ? ans : -1;
    }
}
