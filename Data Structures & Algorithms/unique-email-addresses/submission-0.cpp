class Solution {
public:
    int numUniqueEmails(vector<string>& emails) {
        unordered_set<string> ans;
        for(const string &e : emails) {
            int at = e.find('@');
            string s;
            s.reserve(at);
            for(int i = 0; i < at; ++i) {
                if(e[i] == '+') break;
                if(e[i] != '.') s += e[i];
            }
            ans.insert(s + e.substr(at));
        }
        return static_cast<int>(ans.size());
    }
};