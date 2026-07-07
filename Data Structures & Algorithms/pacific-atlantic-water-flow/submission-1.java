class Solution {
    private int m, n;
    private final int[][] dirs = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};

    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        m = heights.length;
        n = heights[0].length;

        boolean[][] pacific = new boolean[m][n];
        boolean[][] atlantic = new boolean[m][n];

        for(int i = 0; i < m; ++i) {
            dfs(heights, pacific, i, 0);
            dfs(heights, atlantic, i, n - 1);
        }

        for(int j = 0; j < n; ++j) {
            dfs(heights, pacific, 0, j);
            dfs(heights, atlantic, m - 1, j);
        }

        List<List<Integer>> result = new ArrayList<>();
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(pacific[i][j] && atlantic[i][j]) {
                    result.add(List.of(i, j));
                }
            }
        }
        
        return result;
    }

    private void dfs(int[][] ht, boolean[][] vis, int r, int c) {
        vis[r][c] = true;
        
        for(int[] d : dirs) {
            int nr = r + d[0];
            int nc = c + d[1];
            
            if(nr >= 0 && nc >= 0 && nr < m && nc < n && !vis[nr][nc] && ht[nr][nc] >= ht[r][c]) {
                dfs(ht, vis, nr, nc);
            }
        }
    }
}