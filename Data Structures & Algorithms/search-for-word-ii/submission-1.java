class Solution {
    private static class TrieNode {
        TrieNode[] child = new TrieNode[26];
        boolean isEnd = false;
    }

    private static class Trie {
        TrieNode root = new TrieNode();

        void insert(String word) {
            TrieNode node = root;
            for(int i = 0; i < word.length(); ++i) {
                int idx = word.charAt(i) - 'a';
                if(node.child[idx] == null) node.child[idx] = new TrieNode();
                node = node.child[idx];
            }
            node.isEnd = true;
        }
    }

    private final int[][] dirs = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
    private void dfs(int r, int c, TrieNode node, char[][] board, StringBuilder path, List<String> res) {
        char ch = board[r][c];
        int idx = ch - 'a';
        TrieNode nextNode = node.child[idx];

        if(nextNode == null) return;

        path.append(ch);
        board[r][c] = '#';

        if(nextNode.isEnd) {
            res.add(path.toString());
            nextNode.isEnd = false;
        }

        int n = board.length, m = board[0].length;
        for(int[] d : dirs) {
            int nr = r + d[0];
            int nc = c + d[1];

            if(nr >= 0 && nr < n && nc >= 0 && nc < m && board[nr][nc] != '#') {
                dfs(nr, nc, nextNode, board, path, res);
            }
        }

        board[r][c] = ch;
        path.deleteCharAt(path.length() - 1);
    }

    public List<String> findWords(char[][] board, String[] words) {
        int n = board.length, m = board[0].length;
        Trie t = new Trie();
        for(String s : words) t.insert(s);

        StringBuilder path = new StringBuilder();
        List<String> res = new ArrayList<String>();

        for(int i = 0; i < n; ++i) {
            for(int j = 0; j < m; ++j) {
                dfs(i, j, t.root, board, path, res);
            }
        }
        return res;
    }
}
