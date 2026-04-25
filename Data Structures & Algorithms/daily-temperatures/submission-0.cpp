class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        stack<int> st;

        vector<int> ans(n);
        for(int i = n - 1; i >= 0; --i) {
            int temp = temperatures[i];
            while(!st.empty() && temperatures[st.top()] <= temp) st.pop();

            ans[i] = st.empty() ? 0 : st.top() - i;

            st.push(i);
        }

        return ans;
    }
};
