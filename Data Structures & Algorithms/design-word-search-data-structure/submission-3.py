class WordDictionary:
    def __init__(self):
        self.child = {}

    def addWord(self, word: str) -> None:
        node = self.child

        for c in word:
            if c not in node:
                node[c] = {}
            node = node[c]

        node["isEnd"] = True 

    def __dfs(self, node: dict, word: str, i: int) -> bool:
        if i == len(word):
            return "isEnd" in node
        
        if word[i] != '.':
            if word[i] not in node:
                return False
            return self.__dfs(node[word[i]], word, i + 1)

        for j in node:
            if j != "isEnd" and self.__dfs(node[j], word, i + 1):
                return True
        
        return False

    def search(self, word: str) -> bool:
        return self.__dfs(self.child, word, 0)