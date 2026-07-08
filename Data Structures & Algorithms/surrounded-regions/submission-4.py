class Solution:
    def solve(self, board: List[List[str]]) -> None:
        # m, n = len(board), len(board[0])

        # queue = collections.deque()
        # for i in range(m):
        #     if board[i][0] == 'O':
        #         queue.append((i, 0))
        #         board[i][0] = '#'
        #     if board[i][n - 1] == 'O':
        #         queue.append((i, n - 1))
        #         board[i][n - 1] = '#'
        # for j in range(n):
        #     if board[0][j] == 'O':
        #         queue.append((0, j))
        #         board[0][j] = '#'
        #     if board[m - 1][j] == 'O':
        #         queue.append((m - 1, j))
        #         board[m - 1][j] = '#'
        
        # dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]
        # while queue:
        #     r, c = queue.popleft()

        #     for dr, dc in dirs:
        #         nr, nc = r + dr, c + dc

        #         if 0 <= nr < m and 0 <= nc < n and board[nr][nc] == 'O':
        #             board[nr][nc] = '#'
        #             queue.append((nr, nc))
        
        # for i in range(m):
        #     for j in range(n):
        #         if board[i][j] == 'O':
        #             board[i][j] = 'X'
        #         elif board[i][j] == '#':
        #             board[i][j] = 'O'


        ROW, COL = len(board), len(board[0])
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]

        def dfs(row, col):
            if row < 0 or row == ROW or col < 0 or col == COL or board[row][col] != "O":
                return
            board[row][col] = "#"
            for dr, dc in directions:
                nr, nc = row + dr, col + dc
                dfs(nr, nc)

        for r in range(ROW):
            for c in range(COL):
                if r == 0 or r == ROW - 1 or c == 0 or c == COL - 1:
                    dfs(r, c)
        
        for r in range(ROW):
            for c in range(COL):
                if board[r][c] == "O":
                    board[r][c] = "X"
                elif board[r][c] == "#":
                    board[r][c] = "O"