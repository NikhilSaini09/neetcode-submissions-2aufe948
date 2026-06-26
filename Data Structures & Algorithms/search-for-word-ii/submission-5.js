class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const n = board.length;
        const m = board[0].length;

        const root = {};
        for(const word of words) {
            let node = root;
            for(const c of word) {
                if(!node[c]) node[c] = {};
                node = node[c];
            }
            node["word"] = word;
        }

        const res = [];
        const dirs = [[-1, 0], [0, -1], [1, 0], [0, 1]];

        const dfs = (r, c, node) => {
            const char = board[r][c];
            node = node[char];

            if(!node) return;

            if(node["word"]) {
                res.push(node["word"]);
                delete node["word"];
            }

            board[r][c] = '#';
            for(const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

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
