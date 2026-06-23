class PrefixTree {
    private static class PTNode {
        PTNode[] child;
        boolean isEnd;

        PTNode() {
            this.child = new PTNode[26];
            this.isEnd = false;
        }
    }

    private PTNode root;

    public PrefixTree() {
        this.root = new PTNode();
    }

    public void insert(String word) {
        PTNode node = root;

        for(int i = 0; i < word.length(); ++i) {
            int idx = word.charAt(i) - 'a';

            if(node.child[idx] == null) node.child[idx] = new PTNode();

            node = node.child[idx];
        }

        node.isEnd = true;
    }

    public boolean search(String word) {
        PTNode node = root;

        for(int i = 0; i < word.length(); ++i) {
            int idx = word.charAt(i) - 'a';

            if(node.child[idx] == null) return false;

            node = node.child[idx];
        }

        return node.isEnd;
    }

    public boolean startsWith(String word) {
        PTNode node = root;

        for(int i = 0; i < word.length(); ++i) {
            int idx = word.charAt(i) - 'a';

            if(node.child[idx] == null) return false;

            node = node.child[idx];
        }

        return true;
    }
}
