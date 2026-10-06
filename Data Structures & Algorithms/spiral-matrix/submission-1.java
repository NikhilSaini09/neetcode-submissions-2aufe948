class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        int n = matrix.length, m = matrix[0].length;
        int lvl = (Math.min(n, m) + 1) / 2;
        
        List<Integer> ans = new ArrayList<>();
        for(int i = 0; i < lvl; ++i) {
            for(int j = i; j < m - i; ++j) {
                ans.add(matrix[i][j]);
            }
            for(int j = i + 1; j < n - i; ++j) {
                ans.add(matrix[j][m - i - 1]);
            }
            if(n >= 2 * i + 2) {
                for(int j = m - i - 2; j >= i; --j) {
                    ans.add(matrix[n - i - 1][j]);
                }
            }
            if(m >= 2 * i + 2) {
                for(int j = n - i - 2; j > i; --j) {
                    ans.add(matrix[j][i]);
                }
            }
        }
        return ans;
    }
}
