interface TrieNode {
    word?: string;
    [char: string]: TrieNode | string | undefined;
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board: string[][], words: string[]): string[] {
        const n: number = board.length;
        const m: number = board[0].length;

        const root: TrieNode = {};
        for(const word of words) {
            let node = root;
            for(const c of word) {
                if(!node[c]) node[c] = {};
                node = node[c] as TrieNode;
            }
            node["word"] = word;
        }

        const res: string[] = [];
        const dirs: number[][] = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const dfs = (r: number, c: number, node: TrieNode): void => {
            const char: string = board[r][c];
            node = node[char] as TrieNode | undefined;

            if(!node) return;

            if(node["word"]) {
                res.push(node["word"]);
                delete node["word"];
            }

            board[r][c] = '#';
            for(const [dr, dc] of dirs) {
                const nr: number = r + dr;
                const nc: number = c + dc;

                if(nr >= 0 && nr < n && nc >= 0 && nc < m && board[nr][nc] !== '#') {
                    dfs(nr, nc, node);
                }
            }
            board[r][c] = char;
        }

        for(let i = 0; i < n; ++i) {
            for(let j = 0; j < m; ++j) {
                dfs(i, j, root);
            }
        }

        return res;
    }
}
