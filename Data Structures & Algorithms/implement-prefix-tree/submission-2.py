class TrieNode:
    def __init__(self):
        self.child = {}
        self.is_end = False

class PrefixTree:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for c in word:
            if c not in node.child:
                node.child[c] = TrieNode()
            node = node.child[c]
        node.is_end = True

    def search(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c not in node.child:
                return False
            node = node.child[c]
        return node.is_end

    def startsWith(self, word: str) -> bool:
        node = self.root
        for c in word:
            if c not in node.child:
                return False
            node = node.child[c]
        return True