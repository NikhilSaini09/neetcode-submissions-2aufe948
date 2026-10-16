class Solution {
public:
    string multiply(string num1, string num2) {
        if(num1 == "0" || num2 == "0") return "0";

        reverse(num1.begin(), num1.end());
        reverse(num2.begin(), num2.end());

        int n = num1.size(), m = num2.size();
        string ans(n + m, '0');

        for(int i = 0; i < m; ++i) {
            int d2 = num2[i] - '0';

            for(int j = 0; j < n; ++j) {
                int d1 = num1[j] - '0';
                int zcnt = i + j;

                int carry = ans[zcnt] - '0';
                int cur = d1 * d2 + carry;

                ans[zcnt] = (cur % 10) + '0';
                ans[zcnt + 1] += (cur / 10);
            }
        }

        if(ans.back() == '0') ans.pop_back();
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
