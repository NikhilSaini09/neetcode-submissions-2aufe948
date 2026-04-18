class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int hash[256];
        fill(hash, hash + 256, -1);
        int l = 0, ans = 0, n = s.length();
        for(int r = 0; r < n; ++r) {
            if(hash[s[r]] >= l) l = hash[s[r]] + 1;

            hash[s[r]] = r;
            ans = max(ans, r - l + 1);
        }
        return ans;
    }
};
