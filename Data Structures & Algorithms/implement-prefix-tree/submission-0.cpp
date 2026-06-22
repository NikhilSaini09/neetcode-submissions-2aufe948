#include <bits/stdc++.h>

class PrefixTree {
private:
    struct TrieNode {
        TrieNode* children[26];
        bool isEnd;

        TrieNode() {
            isEnd = false;
            memset(children, 0, sizeof(children));
        }
    };

    TrieNode* root;
public:
    PrefixTree() {
        root = new TrieNode();
    }

    void insert(const string& word) {
        TrieNode* node = root;

        for(char c : word) {
            int idx = c - 'a';

            if(node->children[idx] == nullptr) node->children[idx] = new TrieNode();
            node = node->children[idx];
        }

        node->isEnd = true;
    }

    bool search(const string& word) {
        TrieNode* node = root;

        for(char c : word) {
            int idx = c - 'a';

            if(node->children[idx] == nullptr) return false;
            node = node->children[idx];
        }

        return node->isEnd;
    }

    bool startsWith(const string& prefix) {
        TrieNode* node = root;

        for(char c : prefix) {
            int idx = c - 'a';

            if(node->children[idx] == nullptr) return false;
            node = node->children[idx];
        }

        return true;
    }
};