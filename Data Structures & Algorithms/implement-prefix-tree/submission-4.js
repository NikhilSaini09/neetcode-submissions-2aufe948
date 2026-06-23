class PrefixTree {
    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;

        for(const c of word) {
            if(!node[c]) node[c] = {};
            node = node[c];
        }

        node["end"] = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;

        for(const c of word) {
            if(!node[c]) return false;
            node = node[c];
        }

        return !!node["end"];
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word) {
        let node = this.root;

        for(const c of word) {
            if(!node[c]) return false;
            node = node[c];
        }

        return true;
    }
}
