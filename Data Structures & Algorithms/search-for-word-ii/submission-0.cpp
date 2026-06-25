// struct TrieNode {
//     TrieNode* children[26];
//     bool isEnd;

//     TrieNode() {
//         isEnd = false;
//         for(int i = 0; i < 26; ++i) children[i] = nullptr;
//     }
//     ~TrieNode() { for(auto &c : children) delete c; }
// };

// class Trie {
// public:
//     TrieNode* root;
//     Trie() : root(new TrieNode()) {}
//     ~Trie() { delete root; }

//     void insert(const string& word) {
//         TrieNode* node = root;

//         for(char c : word) {
//             int idx = c - 'a';

//             if(node->children[idx] == nullptr) node->children[idx] = new TrieNode();
//             node = node->children[idx];
//         }

//         node->isEnd = true;
//     }
// };

// class Solution {
// public:
//     vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
//         int n = board.size(), m = board[0].size();

//         Trie t;
//         for(const string &s : words) t.insert(s);

//         string path;
//         path.reserve(12);
//         vector<string> res;
//         vector<vector<bool>> vis(n, vector<bool> (m, false));

//         int dirs[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};     

//         function<void(int, int, TrieNode*)> checkStart = [&](int r, int c, TrieNode* node) {
//             path.push_back(board[r][c]);
//             vis[r][c] = true;
            
//             if(node->isEnd) {
//                 res.push_back(path);
//                 node->isEnd = false;
//             }

//             for(int i = 0; i < 4; ++i) {
//                 int nr = r + dirs[i][0];
//                 int nc = c + dirs[i][1];

//                 if(nr >= 0 && nr < n && nc >= 0 && nc < m && !vis[nr][nc]) {
//                     TrieNode *nnode = node->children[board[nr][nc] - 'a'];
//                     if(nnode) checkStart(nr, nc, nnode);
//                 }
//             }

//             vis[r][c] = false;
//             path.pop_back();
//         };

//         for(int i = 0; i < n; ++i) {
//             for(int j = 0; j < m; ++j) {
//                 TrieNode *node = t.root->children[board[i][j] - 'a'];
//                 if(node) checkStart(i, j, node);
//             }
//         }
        
//         return res;
//     }
// };


struct TrieNode {
    TrieNode* children[26];
    bool isEnd;

    TrieNode() {
        isEnd = false;
        for(int i = 0; i < 26; ++i) children[i] = nullptr;
    }
    ~TrieNode() { for(auto &c : children) delete c; }
};

class Trie {
public:
    TrieNode* root;
    Trie() : root(new TrieNode()) {}
    ~Trie() { delete root; }

    void insert(const string& word) {
        TrieNode* node = root;
        for(char c : word) {
            int idx = c - 'a';
            if(node->children[idx] == nullptr) node->children[idx] = new TrieNode();
            node = node->children[idx];
        }
        node->isEnd = true;
    }
};

class Solution {
public:
    vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
        int n = board.size(), m = board[0].size();

        Trie t;
        for(const string &s : words) t.insert(s);

        string path;
        path.reserve(12);
        vector<string> res;
        vector<vector<bool>> vis(n, vector<bool>(m, false));

        int dirs[4][2] = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};     

        function<void(int, int, TrieNode*)> checkStart = [&](int r, int c, TrieNode* node) {
            int idx = board[r][c] - 'a';
            TrieNode* nextNode = node->children[idx];
            
            if(!nextNode) return;

            path.push_back(board[r][c]);
            vis[r][c] = true;
            
            if(nextNode->isEnd) {
                res.push_back(path);
                nextNode->isEnd = false;
            }

            for(int i = 0; i < 4; ++i) {
                int nr = r + dirs[i][0];
                int nc = c + dirs[i][1];

                if(nr >= 0 && nr < n && nc >= 0 && nc < m && !vis[nr][nc]) {
                    checkStart(nr, nc, nextNode);
                }
            }

            vis[r][c] = false;
            path.pop_back();
        };

        for(int i = 0; i < n; ++i) {
            for(int j = 0; j < m; ++j) {
                checkStart(i, j, t.root);
            }
        }
        
        return res;
    }
};