#include <bits/stdc++.h>

class WordDictionary {
    struct TrieNode {
        TrieNode* children[26];
        bool isEnd;

        TrieNode() {
            isEnd = false;
            memset(children, 0, sizeof(children));
        }
    };

    TrieNode* root;

    bool dfs(TrieNode* node, const string &word, int i) {
        if(i == word.length()) return node->isEnd;

        if(word[i] == '.') {
            for(int j = 0; j < 26; ++j) {
                if(node->children[j] == nullptr) continue;
                if(dfs(node->children[j], word, i + 1)) return true;
            }
        } else {
            int idx = word[i] - 'a';
            if(node->children[idx] == nullptr) return false;
            return dfs(node->children[idx], word, i + 1);
        }

        return false;
    }
public:
    WordDictionary() {
        root = new TrieNode();
    }
    
    void addWord(string word) {
        TrieNode* node = root;

        for(char c : word) {
            int idx = c - 'a';

            if(node->children[idx] == nullptr) node->children[idx] = new TrieNode();
            node = node->children[idx];
        }

        node->isEnd = true;
    }
    
    bool search(string word) {
        return dfs(root, word, 0);
    }
};
