class Solution {
public:
    bool checkInclusion(string s1, string s2) {
        int m = s1.length(), n = s2.length();
        int hash[26] = {0};

        for(char c : s1) hash[c - 'a']++;

        int l = 0, r = 0;
        while(r < n) {
            if(hash[s2[r] - 'a'] > 0) {
                --hash[s2[r] - 'a'];
            } else {
                if(l < r) {
                    while(s2[r] != s2[l]) ++hash[s2[l++] - 'a'];
                    l++;
                } else ++l;
            }
            
            // cout << l << " "<< r<< endl;
            if(r - l + 1 == m) return true;

            ++r;
        }

        return false;
    }
};
