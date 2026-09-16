class Solution {
public:
    vector<int> partitionLabels(string s) {
        int n = s.length();
        int last[26];
        for(int i = 0; i < n; ++i) last[s[i] - 'a'] = i;

        int st = 0, ed = 0;
        vector<int> ans;
        for(int i = 0; i < n; ++i) {
            ed = max(ed, last[s[i] - 'a']);
            if(i == ed) {
                ans.push_back(ed - st + 1);
                st = i + 1;
            }
        }
        return ans;
    }
};
