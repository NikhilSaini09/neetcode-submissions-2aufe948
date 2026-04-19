class Solution {
public:
    int characterReplacement(string s, int k) {
        int n = s.length();
        int l = 0, freq = 0, ans = 0;
        int hash[26] = {0};
        for(int r = 0; r < n; ++r) {
            int idx = s[r] - 'A';
            hash[idx]++;
            freq = max(freq, hash[idx]);

            if(r - l + 1 > k + freq) hash[s[l++] - 'A']--;

            ans = r - l + 1;
        }

        return ans;
    }
};
