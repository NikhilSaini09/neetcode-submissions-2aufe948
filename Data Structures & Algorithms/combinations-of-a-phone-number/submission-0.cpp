class Solution {
public:
    vector<string> letterCombinations(string digits) {
        if(digits.empty()) return {};

        string combo[] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
        string temp;
        vector<string> sol;

        letterCombo(digits, 0, sol, temp, combo);

        return sol;
    }
private:
    void letterCombo(string &digits, int ind, vector<string> &sol, string &comb, string combo[]) {
        if(ind == digits.length()) {
            sol.push_back(comb);
            return;
        }

        int j = digits[ind] - '0';

        for(int i=0; i<combo[j].size(); ++i) {
            comb.push_back(combo[j][i]);
            letterCombo(digits, ind + 1, sol, comb, combo);
            comb.pop_back();
        }
    }
};
