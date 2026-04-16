class Solution {
public:
    int maxArea(vector<int>& heights) {
        int n = heights.size();
        int i = 0, j = n - 1, ans = 0;

        while(i < j) {
            if(heights[i] < heights[j]) {
                ans = max(ans, heights[i] * (j - i));
                ++i;
            } else {
                ans = max(ans, heights[j] * (j - i));
                --j;
            }
        }

        return ans;
    }
};
