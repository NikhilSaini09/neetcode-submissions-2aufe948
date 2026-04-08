class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        vector<vector<string>> ans;
        int i = 0;
        unordered_map<string, int> imap;
        for(string &s : strs) {
            string temp = s;
            sort(temp.begin(), temp.end());
            if(imap.count(temp)) ans[imap[temp]].push_back(s);
            else {
                imap[temp] = i++;
                ans.push_back({s});
            }
        }

        return ans;
    }
};
