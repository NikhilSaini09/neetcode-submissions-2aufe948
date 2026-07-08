class Solution {
    public void solve(char[][] board) {
        int m = board.length, n = board[0].length;

        Queue<int[]> queue = new LinkedList<>();
        for(int i = 0; i < m; ++i) {
            if(board[i][0] == 'O') {queue.offer(new int[]{i, 0}); board[i][0] = '#';}
            if(board[i][n - 1] == 'O') {queue.offer(new int[]{i, n - 1}); board[i][n - 1] = '#';}
        }
        for(int j = 1; j < n - 1; ++j) {
            if(board[0][j] == 'O') {queue.offer(new int[]{0, j}); board[0][j] = '#';}
            if(board[m - 1][j] == 'O') {queue.offer(new int[]{m - 1, j}); board[m - 1][j] = '#';}
        }

        int[][] dirs = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
        while(!queue.isEmpty()) {
            int[] cur = queue.poll();

            for(int[] d : dirs) {
                int r = cur[0] + d[0], c = cur[1] + d[1];

                if(r >= 0 && r < m && c >= 0 && c < n && board[r][c] == 'O') {
                    board[r][c] = '#';
                    queue.offer(new int[]{r, c});
                }
            }
        }

        for(int i = 0; i < m; ++i) {
            for(int j = 0; j < n; ++j) {
                if(board[i][j] == 'O') board[i][j] = 'X';
                else if(board[i][j] == '#') board[i][j] = 'O';
            }
        }
    }
}
