class Solution {
public:
    bool isAnagram(string s, string t) {
        if(s.length() != t.length()) return false;

        int hash[26] = {0};

        for(char c : s) hash[c - 'a']++;
        for(char c : t) hash[c - 'a']--;

        for(int i : hash) if(i != 0) return false;

        return true;
    }
};
