class Solution {
    private int[][] dp;
    private int[][] dirs = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    public int longestIncreasingPath(int[][] matrix) {
        if(matrix == null || matrix.length == 0 || matrix[0].length == 0) return 0;
        int m = matrix.length, n = matrix[0].length;
        dp = new int[m][n];

        int ans = 0;
        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                ans = Math.max(ans, dfs(matrix, i, j, m, n));
            }
        }
        return ans;
    }
    private int dfs(int[][] matrix, int r, int c, int m, int n) {
        if(dp[r][c] != 0) return dp[r][c];

        int maxLen = 1;
        for(int[] d : dirs) {
            int nr = r + d[0], nc = c + d[1];
            if(nr >= 0 && nc >= 0 && nr < m && nc < n && matrix[nr][nc] < matrix[r][c]) {
                maxLen = Math.max(maxLen, 1 + dfs(matrix, nr, nc, m, n));
            }
        }
        return dp[r][c] = maxLen;
    } 
}
