class Solution {
public:
    int ladderLength(string beginWord, string endWord, vector<string>& wordList) {
        unordered_set<string> st(wordList.begin(), wordList.end());
        if(!st.count(endWord)) return 0;

        int n = beginWord.length();
        queue<string> q;
        q.push(beginWord);

        int cnt = 1;
        while(!q.empty()) {
            int qSize = q.size();
            
            while(qSize--) {
                string cur = q.front();
                q.pop();

                for(int i = 0; i < n; ++i) {
                    char originalChar = cur[i];
                    for(char c = 'a'; c <= 'z'; ++c) {
                        if(cur[i] == c) continue;
                        cur[i] = c;
                        
                        if(cur == endWord) return (cnt + 1);
                        if(st.count(cur)) {
                            q.push(cur);
                            st.erase(cur);
                        }
                        cur[i] = originalChar;
                    }
                }
            }

            ++cnt;
        }

        return 0;
    }
};
