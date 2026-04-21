class Solution {
public:
    string minWindow(string s, string t) {
        int n = s.length(), m = t.length();
        if(m > n) return "";

        int hash[256] = {0};
        for(char c : t) hash[c]++;
    
        int l = 0, st = -1, minLen = 1001;
        for(int r = 0; r < n; ++r) {
            if(hash[s[r]]-- > 0) --m;
            
            while(m == 0) {
                int curLen = r - l + 1;
                if(curLen < minLen) {
                    st = l; 
                    minLen = curLen;
                }

                if(++hash[s[l++]] > 0) ++m;
            }
        }

        return minLen == 1001 ? "" : s.substr(st, minLen);
    }
};
