class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int ans = 0, n = prices.size();
        int minPrice = prices[0];

        for(int i = 1; i < n; ++i) {
            minPrice = min(minPrice, prices[i]);
            ans = max(ans, prices[i] - minPrice);
        }

        return ans;
    }
};
