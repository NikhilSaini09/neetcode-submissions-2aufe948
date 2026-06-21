class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        ans = []
        board = [["."] * n for _ in range(n)]
        
        row_safe = [True] * n
        upper_diag_safe = [True] * (2 * n - 1)
        lower_diag_safe = [True] * (2 * n - 1)
        
        def put_n_queens(col: int):
            if col == n:
                ans.append(["".join(r) for r in board])
                return
            
            for i in range(n):
                if row_safe[i] and upper_diag_safe[n - 1 + col - i] and lower_diag_safe[col + i]:
                    
                    row_safe[i] = False
                    upper_diag_safe[n - 1 + col - i] = False
                    lower_diag_safe[col + i] = False
                    board[i][col] = "Q"
                    
                    put_n_queens(col + 1)
                    
                    row_safe[i] = True
                    upper_diag_safe[n - 1 + col - i] = True
                    lower_diag_safe[col + i] = True
                    board[i][col] = "."

        put_n_queens(0)
        return ans