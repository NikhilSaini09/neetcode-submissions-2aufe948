class WordDictionary {
    private static class TrieNode {
        TrieNode[] child;
        boolean isEnd;

        TrieNode() {
            this.child = new TrieNode[26];
            this.isEnd = false;
        }
    }

    private TrieNode root;

    public WordDictionary() {
        this.root = new TrieNode();
    }

    public void addWord(String word) {
        TrieNode node = root;

        for(int i = 0; i < word.length(); ++i) {
            int idx = word.charAt(i) - 'a';

            if(node.child[idx] == null) node.child[idx] = new TrieNode();
            node = node.child[idx];
        }

        node.isEnd = true;
    }

    private boolean dfs(TrieNode node, String word, int i) {
        if(i == word.length()) return node.isEnd;

        char ch = word.charAt(i);
        if(ch != '.') {
            int idx = ch - 'a';
            if(node.child[idx] == null) return false;
            return dfs(node.child[idx], word, i + 1);
        }

        for(int j = 0; j < 26; ++j) {
            if(node.child[j] != null && dfs(node.child[j], word, i + 1)) return true;
        }

        return false;
    }

    public boolean search(String word) {
        return dfs(root, word, 0);
    }
}
