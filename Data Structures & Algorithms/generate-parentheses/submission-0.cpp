class Solution {
    void generate(int n, int open, int close, string &s, vector<string> &ans) {
        if(s.length() == 2*n) {
            ans.push_back(s);
            return;
        }

        if(open < n) {
            s.push_back('(');
            generate(n, open+1, close, s, ans);
            s.pop_back();
        }

        if(open > close) {
            s.push_back(')');
            generate(n, open, close+1, s, ans);
            s.pop_back();
        }
    }
public:
    vector<string> generateParenthesis(int n) {
        string s;
        vector<string> res;
        generate(n, 0, 0, s, res);

        return res;
    }
};
