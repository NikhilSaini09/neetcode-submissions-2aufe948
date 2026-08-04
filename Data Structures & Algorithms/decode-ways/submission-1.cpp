class Solution {
public:
    int numDecodings(string s) {
        if(s[0] == '0') return 0;
        int si = 1, d = 1, n = s.length();
        for(int i = 1; i < n; ++i) {
            int cur = 0;
            if(s[i] != '0') cur += si;
            if(s[i - 1] == '1' || (s[i - 1] == '2' and s[i] <= '6')) cur += d;
            d = si;
            si = cur;
        }
        return si;
    }
};






// class Solution {
// public:
//     int numDecodings(string s) {
//         int dp = 0, dp2 = 0;
//         int dp1 = 1;
//         for (int i = s.size() - 1; i >= 0; i--) {
//             if (s[i] == '0') {
//                 dp = 0;
//             } else {
//                 dp = dp1;
//                 if (i + 1 < s.size() && (s[i] == '1' ||
//                     s[i] == '2' && s[i + 1] < '7')) {
//                     dp += dp2;
//                 }
//             }
//             dp2 = dp1;
//             dp1 = dp;
//             dp = 0;
//         }
//         return dp1;
//     }
// };