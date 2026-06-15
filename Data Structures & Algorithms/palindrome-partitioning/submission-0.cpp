class Solution {
public:
    vector<vector<string>> partition(string s) {
        vector<string> temp;
        vector<vector<string>> sol;
        palPart(s, 0, temp, sol);
        return sol;
    }
private:
    bool isPalindrome(string &s, int st, int end) {
        if(st < 0 || end >= s.length()) return false;

        while(end > st) {
            if(s[st] != s[end]) return false;
            st++;
            end--;
        }
        return true;
    }
    void palPart(string &s, int ind, vector<string> &pp, vector<vector<string>> &sol) {
        if(ind == s.length()) {
            sol.push_back(pp);
            return;
        }

        for(int i=ind; i<s.length(); ++i) {
            if(isPalindrome(s, ind, i)) {
                pp.push_back(s.substr(ind, i-ind+1));
                palPart(s, i + 1, pp, sol);
                pp.pop_back();
            }
        }
    }
};
