class Solution {
public:
    string encode(vector<string>& strs) {
        string ans = to_string(strs.size()) + "#";
        for(string &s : strs) {
            ans += to_string(s.length()) + "#" + s;
        }
        return ans;
    }

    vector<string> decode(string s) {
        int n = s.length(), i = 0, j, len;
        j = s.find('#', i);
        vector<string> ans;
        ans.reserve(stoi(s.substr(i, j - i)));
        i = j + 1;
        while(i < n) {
            j = s.find('#', i);
            len = stoi(s.substr(i, j - i));
            
            i = j + 1;
            ans.push_back(s.substr(i, len));
            i += len;
        }
        return ans;
    }
};
