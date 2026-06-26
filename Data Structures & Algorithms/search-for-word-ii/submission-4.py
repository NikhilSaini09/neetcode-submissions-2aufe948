# class TrieNode:
#     def __init__(self):
#         self.child = {}
#         self.word = ''

# class Trie:
#     def __init__(self):
#         self.root = TrieNode()

#     def insert(self, word: str) -> None:
#         node = self.root
#         for c in word:
#             if c not in node.child:
#                 node.child[c] = TrieNode()
#             node = node.child[c]
#         node.word = word

# class Solution:
#     def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
#         n, m = len(board), len(board[0])

#         trie = Trie()
#         for w in words:
#             trie.insert(w)
        
#         res = []
#         dirs = [(-1, 0), (0, -1), (1, 0), (0, 1)]

#         def dfs(r: int, c: int, node : TrieNode):
#             char = board[r][c]
#             if char in node.child:
#                 node = node.child[char]
#             else:
#                 return

#             if node.word:
#                 res.append(node.word)
#                 node.word = ''
            
#             board[r][c] = '#'
#             for dr, dc in dirs:
#                 nr, nc = r + dr, c + dc

#                 if 0 <= nr < n and 0 <= nc < m and board[nr][nc] != '#':
#                     dfs(nr, nc, node)
            
#             board[r][c] = char

#         for i in range(n):
#             for j in range(m):
#                 dfs(i, j, trie.root)
        
#         return res


class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        WORD_KEY = "$"

        trie = {}
        for word in words:
            node = trie
            for letter in word:
                node = node.setdefault(letter, {})
            node[WORD_KEY] = word

        rowNum = len(board)
        colNum = len(board[0])

        matchedWords = []

        def backtracking(row, col, parent):
            letter = board[row][col]
            currNode = parent[letter]

            word_match = currNode.pop(WORD_KEY, False)
            if word_match:
                matchedWords.append(word_match)

            board[row][col] = "#"

            for rowOffset, colOffset in [(-1, 0), (0, 1), (1, 0), (0, -1)]:
                newRow, newCol = row + rowOffset, col + colOffset
                if (
                    newRow < 0
                    or newRow >= rowNum
                    or newCol < 0
                    or newCol >= colNum
                ):
                    continue
                if not board[newRow][newCol] in currNode:
                    continue
                backtracking(newRow, newCol, currNode)

            board[row][col] = letter
            if not currNode:
                parent.pop(letter)

        for row in range(rowNum):
            for col in range(colNum):
                if board[row][col] in trie:
                    backtracking(row, col, trie)

        return matchedWords