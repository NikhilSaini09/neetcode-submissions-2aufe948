class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        int n = heights.size();
        heights.push_back(0);
        stack<int> st;
        
        int ans = 0;
        for(int i = 0; i <= n; ++i) {
            while(!st.empty() && heights[st.top()] > heights[i]) {
                int hei = heights[st.top()]; st.pop();
                int pse = st.empty() ? -1 : st.top();
                ans = max(ans, hei * (i - pse - 1));
            }

            st.push(i);
        }
        heights.pop_back();
        return ans;
    }
};
