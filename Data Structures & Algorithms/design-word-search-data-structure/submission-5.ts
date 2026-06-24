interface TrieNode {
    end? : boolean;
    [char: string]: TrieNode | boolean | undefined;
}

class WordDictionary {
    private root: TrieNode;

    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let node: TrieNode = this.root;

        for(const c of word as string) {
            if(!node[c]) node[c] = {};
            node = node[c] as TrieNode;
        }

        node.end = true;
    }

    #dfs(node: any, word: string, i: number): boolean {
        if(i == word.length) return !!node["end"];

        if(word[i] != '.') {
            if(!node[word[i]]) return false;
            return this.#dfs(node[word[i]], word, i + 1);
        }

        for(const c in node) {
            if(c != "end" && this.#dfs(node[c], word, i + 1)) return true;
        }

        return false;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.#dfs(this.root, word, 0);
    }
}
