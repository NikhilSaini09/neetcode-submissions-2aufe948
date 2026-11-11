class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        unordered_set<string> ans;
        for(const string &e : emails) {
            int at = e.find('@');
            string s;
            s.reserve(e.size());
            for(int i = 0; i < at; ++i) {
                if(e[i] == '+') break;
                if(e[i] != '.') s += e[i];
            }
            s.append(e, at, string::npos);
            ans.insert(move(s));
        }
        return static_cast<int>(ans.size());
    }
};