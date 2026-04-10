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


// class Solution {
// public:

//     string encode(vector<string>& strs) {
//         string final;
//         for (auto str: strs) {
//             final += to_string(str.length()) + "#" + str;
//         }
//         return final;
//     }

//     vector<string> decode(string s) {
//         int startPos = 0;
//         int currentPos = 0;
//         if (s == "") return {};

//         vector<string> results;
//         string currentLength = "";

//         while(currentPos < s.size()) {
//          if (s[currentPos] == '#') {
//             int length = stoi(currentLength);
//             results.push_back(s.substr(currentPos+1,length));
//             currentLength = "";
//             startPos += length;
//             currentPos += length;
//          } else {
//             currentLength += s[currentPos];
            
//          }
//          currentPos +=1;
//     }
//     return results;
//     }
// };