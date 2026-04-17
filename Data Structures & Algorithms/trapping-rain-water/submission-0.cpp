class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size(), ans = 0;
        int left = 0, right = n-1;
        int lMax = height[0], rMax = height[n-1];

        while(left < right) {
            int one = height[left];
            int two = height[right];

            if(one <= two) {
                lMax = max(one, lMax);
                ans += (lMax - one);
                ++left;
            } else {
                rMax = max(two, rMax);
                ans += (rMax - two);
                --right;
            }
        }

        return ans;
    }
};
