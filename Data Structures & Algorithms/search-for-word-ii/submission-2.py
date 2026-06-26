class TrieNode:
    def __init__(self):
        self.child = {}
        self.word = '';

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node.child:
                node.child[c] = TrieNode()
            node = node.child[c]
        node.word = word

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        n, m = len(board), len(board[0])

        trie = Trie()
        for w in words:
            trie.insert(w)
        
        res = []
        dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]

        def dfs(r: int, c: int, node : TrieNode):
            char = board[r][c]
            if char in node.child:
                node = node.child[char]
            else:
                return

            if node.word:
                res.append(node.word)
                node.word = ''
            
            board[r][c] = '#'
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc

                if 0 <= nr < n and 0 <= nc < m and board[nr][nc] != '#':
                    dfs(nr, nc, node)
            
            board[r][c] = char

        for i in range(n):
            for j in range(m):
                dfs(i, j, trie.root)
        
        return res;