class WordDictionary {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root;

        for(const c of word) {
            if(!node[c]) node[c] = {};
            node = node[c];
        }

        node["end"] = true;
    }

    #dfs(node, word, i) {
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
    search(word) {
        return this.#dfs(this.root, word, 0);
    }
}
