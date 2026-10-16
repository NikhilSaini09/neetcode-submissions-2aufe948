// class Solution {
// public:
//     string multiply(string num1, string num2) {
//         if(num1 == "0" || num2 == "0") return "0";

//         reverse(num1.begin(), num1.end());
//         reverse(num2.begin(), num2.end());

//         int n = num1.size(), m = num2.size();
//         string ans(n + m, '0');

//         for(int i = 0; i < m; ++i) {
//             int d2 = num2[i] - '0';

//             for(int j = 0; j < n; ++j) {
//                 int d1 = num1[j] - '0';
//                 int zcnt = i + j;

//                 int carry = ans[zcnt] - '0';
//                 int cur = d1 * d2 + carry;

//                 ans[zcnt] = (cur % 10) + '0';
//                 ans[zcnt + 1] += (cur / 10);
//             }
//         }

//         if(ans.back() == '0') ans.pop_back();
//         reverse(ans.begin(), ans.end());
//         return ans;
//     }
// };


class Solution {
public:
    string multiply(string num1, string num2) {
        if(num1 == "0" || num2 == "0") return "0";

        int n = num1.length(), m = num2.length();
        vector<int> ans(n + m, 0);

        for(int i = n - 1; i >= 0; --i) {
            for(int j = m - 1; j >= 0; --j) {
                int p1 = i + j, p2 = i + j + 1;
                
                int sum = (num1[i] - '0') * (num2[j] - '0') + ans[p2];
                ans[p2] = sum % 10;
                ans[p1] += sum / 10;
            }
        }

        string result = "";
        int start = (ans[0] == 0) ? 1 : 0;
        
        for(int i = start; i < ans.size(); ++i) {
            result += to_string(ans[i]);
        }

        return result;
    }
};