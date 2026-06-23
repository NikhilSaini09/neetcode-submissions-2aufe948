interface TrieNode {
    end? : boolean;
    [char: string]: TrieNode | boolean | undefined;
}

class PrefixTree {
    private root: TrieNode;

    constructor() {
        this.root = {};
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let node: TrieNode = this.root;

        for(const c of word as string) {
            if(!node[c]) node[c] = {};

            node = node[c] as TrieNode;
        }

        node.end = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let node: TrieNode = this.root;

        for(const c of word as string) {
            if(!node[c]) return false;

            node = node[c] as TrieNode;
        }

        return !!node.end;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(word: string): boolean {
        let node: TrieNode = this.root;

        for(const c of word as string) {
            if(!node[c]) return false;

            node = node[c] as TrieNode;
        }

        return true;
    }
}
