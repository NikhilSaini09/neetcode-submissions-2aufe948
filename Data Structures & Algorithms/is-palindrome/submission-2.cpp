class Solution {
public:
    bool isPalindrome(string s) {
        int n = s.length();
        int i = 0, j = n - 1;

        while(true) {
            while(i < n && i < j && !isalnum(s[i])) ++i;
            while(j >= 0 && i < j && !isalnum(s[j])) --j;

            if(i >= j) break;
            if(tolower(s[i++]) != tolower(s[j--])) return false;
        }

        return true;
    }
};
