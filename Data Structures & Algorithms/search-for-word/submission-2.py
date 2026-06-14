class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n = len(board), len(board[0])
        
        def dfs(r: int, c: int, idx: int) -> bool:
            if idx == len(word):
                return True
            
            if not (0 <= r < m and 0 <= c < n):
                return False
            
            if board[r][c] != word[idx]:
                return False
            
            temp = board[r][c]
            board[r][c] = '#'
            
            found = (
                dfs(r + 1, c, idx + 1) or
                dfs(r - 1, c, idx + 1) or
                dfs(r, c + 1, idx + 1) or
                dfs(r, c - 1, idx + 1)
            )
            
            board[r][c] = temp
            
            return found

        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0):
                    return True
                    
        return False